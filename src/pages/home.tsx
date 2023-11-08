import { Box, Container, Typography } from "@mui/material";
import "../App.css";
import ButtonLogo from "../assets/logo svgs/button.svg";
import CardLogo from "../assets/logo svgs/cards.svg";
import NavbarLogo from "../assets/logo svgs/navbars.svg";
import TypographyLogo from "../assets/logo svgs/text.svg";
import LibraryLogo from "/public/library.svg";
import MenuLogo from "../assets/logo svgs/menu.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container>
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
    </Container>
  );
}

export default Home;
