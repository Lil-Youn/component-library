import { Box, Container, Typography, Dialog, IconButton } from "@mui/material";
import { useState } from "react";
import ButtonLogo from "../assets/logo svgs/button.svg";
import CardLogo from "../assets/logo svgs/cards.svg";
import NavbarLogo from "../assets/logo svgs/navbars.svg";
import TypographyLogo from "../assets/logo svgs/text.svg";
import InfoLogo from "../assets/logo svgs/info.svg";
import LibraryLogo from "/public/library.svg";
import MenuLogo from "../assets/logo svgs/menu.svg";
import { Link } from "react-router-dom";

function Home() {
  const [infoModalOpen, setInfoModalOpen] = useState(false);

  const handleInfoButtonClick = () => {
    setInfoModalOpen(true);
  };

  const handleCloseInfoModal = () => {
    setInfoModalOpen(false);
  };

  return (
    <Container>
      <IconButton
        color="inherit"
        onClick={handleInfoButtonClick}
        sx={{
          backgroundColor: "orange",
          borderRadius: "50%",
          top: "10px",
          right: "10px",
          animation: "pulsate 2.5s infinite",
        }}
      >
        <img src={InfoLogo} alt="logo" style={{ width: "1.5rem" }} />
      </IconButton>

      <img className="site-logo" src={LibraryLogo} alt="logo" />

      <Box sx={{ my: 2 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontFamily: "Gilroy extra bold" }}
        >
          Component Library
        </Typography>
        <Typography variant="h5" sx={{ fontFamily: "Gilroy light" }}>
          This is my component library.
        </Typography>
      </Box>
      <Box
        className="site-box"
        sx={{ my: 2, display: "flex", justifyContent: "center" }}
      >
        <Box className="site-content-box" component={Link} to="/buttons">
          <img src={ButtonLogo} alt="logo" style={{ width: "10rem" }} />
          <Typography variant="body1" sx={{ fontFamily: "Gilroy light" }}>
            Buttons
          </Typography>
        </Box>
        <Box className="site-content-box" component={Link} to="/navbars">
          <img src={NavbarLogo} alt="logo" style={{ width: "10rem" }} />
          <Typography variant="body1" sx={{ fontFamily: "Gilroy light" }}>
            Navbars
          </Typography>
        </Box>
        <Box className="site-content-box" component={Link} to="/cards">
          <img src={CardLogo} alt="logo" style={{ width: "10rem" }} />
          <Typography variant="body1" sx={{ fontFamily: "Gilroy light" }}>
            Cards
          </Typography>
        </Box>
        <Box className="site-content-box" component={Link} to="/typography">
          <img src={TypographyLogo} alt="logo" style={{ width: "10rem" }} />
          <Typography variant="body1" sx={{ fontFamily: "Gilroy light" }}>
            Typography
          </Typography>
        </Box>
        <Box className="site-content-box" component={Link} to="/menu">
          <img src={MenuLogo} alt="logo" style={{ width: "10rem" }} />
          <Typography variant="body1" sx={{ fontFamily: "Gilroy light" }}>
            Menu
          </Typography>
        </Box>
      </Box>
      <Dialog open={infoModalOpen} onClose={handleCloseInfoModal}>
        <Box p={2}>
          <Typography
            variant="h6"
            sx={{ fontFamily: "Gilroy extra bold", marginBottom: "1rem" }}
          >
            How This Site Works
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: "Gilroy light" }}>
            Hi! Most of my components are made with React / Typescript and
            Material UI. You can navigate through the components by clicking on
            the boxes. You can download the code for the components as .txt file
            by clicking on the component boxes inside the categories.
            <br /> <br /> The code inside the .txt files is the original code,
            the code that i used for the presentation inside the small boxes is
            different to make it fit inside these boxes.
          </Typography>
        </Box>
      </Dialog>
    </Container>
  );
}

export default Home;
