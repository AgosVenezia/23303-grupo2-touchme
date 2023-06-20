import { useState, useContext } from "react";
import { UserContext } from "../App";
import {
  Container,
  Button,
  Dialog,
  DialogContent,
} from "@mui/material";
import DialogForm from "./DialogForm";
import UserDropdown from "./UserDropdown";
import "./Header.css";

function Header() {
  const [showDialog, setShowDialog] = useState(false);
  const user = useContext(UserContext);

  const handleDialog = () => {
    setShowDialog(!showDialog);
  };

  return (
    <>
      <div className="header">
        <Container maxWidth="xl">
          <nav className="header__navbar">
            <img
              className="navbar__logo"
              src="img/touchme-logo.png"
              alt="Logo"
            />
            {user ? (
              <UserDropdown />
            ) : (
              <Button
                className="btn-login"
                variant="contained"
                onClick={(e) => setShowDialog(true)}
              >
                Log in
              </Button>
            )}
          </nav>
        </Container>
      </div>

      {/* Diálogo de forms para inicio de sesión y registro */}
      <Dialog open={showDialog} onClose={(e) => setShowDialog(false)}>
        <DialogContent className="bg-gradient">
          <DialogForm handleDialog={handleDialog} />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Header;
