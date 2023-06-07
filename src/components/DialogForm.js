import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        TouchMe
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function SignIn({handleForm}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        variant='filled'
        color='warning'
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
        variant='filled'
        color='warning'
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
        control={
          <Checkbox
            value="remember"
            color="default"
            size='small'
          />
        }
        label={
          <Typography variant='subtitle2'>
            Recordarme
          </Typography>
        }
      />
      <Button
        className='btn-login'
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Log in
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2" color='#F1EFEF' underline='hover'>
            Olvidó su contraseña?
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2" color='#F1EFEF' underline='hover' onClick={handleForm}>
            {"No tenés cuenta? Registrate!"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}

function SignUp({handleForm}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container columnSpacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant='filled'
            color='warning'
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
            variant='filled'
            color='warning'
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
            variant='filled'
            color='warning'
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
            variant='filled'
            color='warning'
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
                size='small'
              />
            }
            label={
              <Typography variant='subtitle2'>
                Quiero recibir promociones de marketing y actualizaciones por correo electrónico.
              </Typography>
            }
          />
        </Grid>
      </Grid>
      <Button
        className='btn-login'
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Registrate
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link href="#" variant="body2" color='#F1EFEF' underline='hover' onClick={handleForm}>
            Ya tenés cuenta? Iniciá sesión!
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}

export default function DialogModal() {
  const [isSignIn, setIsSignIn] = useState(true)

  const handleForm = () => {
    setIsSignIn(!isSignIn);
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar
          src='img/touchme-logo.png'
          sx={{ m: 1, bgcolor: 'secondary.main', width: '70px', height: '70px' }}
        >
        </Avatar>
        {
          isSignIn
            ? <SignIn handleForm={handleForm} />
            : <SignUp handleForm={handleForm} />
        }
      </Box>
      <Copyright sx={{ mt: 6, mb: 2 }} />
    </Container>
  );
}
