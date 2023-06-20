import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Snackbar,
  Alert,
} from "@mui/material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        TouchMe
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function SignIn({ handleForm, handleDialog }) {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarData, setSnackbarData] = useState({});

  const navigate = useNavigate();

  const handleClose = () => {
    setShowSnackbar(false);
    setSnackbarData({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSnackbarData({
          severity: "success",
          msg: "Sesión iniciada con éxito!",
        });
        setShowSnackbar(true);

        setTimeout(() => {
          handleDialog();
          navigate('/match');
        }, 2500)
        
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMsg = err.message;
        setSnackbarData({
          severity: "error",
          msg: `Error ${errorCode}. ${errorMsg}`,
        });
        setShowSnackbar(true);
      });
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          variant="filled"
          color="warning"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="filled"
          color="warning"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Contraseña"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="default" size="small" />}
          label={<Typography variant="subtitle2">Recordarme</Typography>}
        />
        <Button
          className="btn-login"
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Log in
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2" color="#F1EFEF" underline="hover">
              Olvidó su contraseña?
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="#"
              variant="body2"
              color="#F1EFEF"
              underline="hover"
              onClick={handleForm}
            >
              {"No tenés cuenta? Registrate!"}
            </Link>
          </Grid>
        </Grid>
      </Box>
      <Snackbar
        open={showSnackbar}
        anchorOrigin={{ vertical:'top', horizontal:'center' }}
        autoHideDuration={2500}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={snackbarData.severity}
          sx={{ width: "100%" }}
        >
          {snackbarData.msg}
        </Alert>
      </Snackbar>
    </>
  );
}

function SignUp({ handleForm, handleDialog }) {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarData, setSnackbarData] = useState({});

  const navigate = useNavigate();

  const handleClose = () => {
    setShowSnackbar(false);
    setSnackbarData({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSnackbarData({
          severity: "success",
          msg: "Se ha registrado con éxito!",
        });
        setShowSnackbar(true);

        setTimeout(() => {
          handleDialog();
          navigate('/match');
        }, 2500)
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMsg = err.message;
        setSnackbarData({
          severity: "error",
          msg: `Error ${errorCode}. ${errorMsg}`,
        });
        setShowSnackbar(true);
      });
  };

  return (
    <>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container columnSpacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="filled"
              color="warning"
              margin="normal"
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="Nombre"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="filled"
              color="warning"
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Apellido"
              name="lastName"
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="filled"
              color="warning"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="filled"
              color="warning"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="new-password"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  value="allowExtraEmails"
                  color="default"
                  size="small"
                />
              }
              label={
                <Typography variant="subtitle2">
                  Quiero recibir promociones de marketing y actualizaciones por
                  correo electrónico.
                </Typography>
              }
            />
          </Grid>
        </Grid>
        <Button
          className="btn-login"
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Registrate
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link
              href="#"
              variant="body2"
              color="#F1EFEF"
              underline="hover"
              onClick={handleForm}
            >
              Ya tenés cuenta? Iniciá sesión!
            </Link>
          </Grid>
        </Grid>
      </Box>
      <Snackbar
        open={showSnackbar}
        anchorOrigin={{ vertical:'top', horizontal:'center' }}
        autoHideDuration={2500}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={snackbarData.severity}
          sx={{ width: "100%" }}
        >
          {snackbarData.msg}
        </Alert>
      </Snackbar>
    </>
  );
}

export default function DialogModal({ handleDialog }) {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          src="img/touchme-logo.png"
          sx={{
            m: 1,
            bgcolor: "secondary.main",
            width: "70px",
            height: "70px",
          }}
        ></Avatar>
        {isSignInForm ? (
          <SignIn handleForm={handleForm} handleDialog={handleDialog} />
        ) : (
          <SignUp handleForm={handleForm} handleDialog={handleDialog} />
        )}
      </Box>
      <Copyright sx={{ mt: 6, mb: 2 }} />
    </Container>
  );
}
