import { Box, Container, Typography } from "@mui/material";
import "../App.css";
import LibraryLogo from "/public/library.svg";
import ButtonLogo from "../assets/logo svgs/button.svg";
import NavbarLogo from "../assets/logo svgs/navbars.svg";
import CardLogo from "../assets/logo svgs/cards.svg";
import TypographyLogo from "../assets/logo svgs/text.svg";
import MenuLogo from "../assets/logo svgs/menu.svg";

function Home() {
  return (
    <Container>
      <img src={LibraryLogo} alt="logo" style={{ width: "25rem" }} />
      <Box sx={{ my: 2 }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{ fontFamily: "Gilroy extra bold" }}
        >
          Component Library
        </Typography>
        <Typography variant="h5" sx={{ fontFamily: "Gilroy light" }}>
          This is my component library.
        </Typography>
      </Box>
      <Box sx={{ my: 2, display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            m: 2,
            p: 2,

            borderRadius: "25%",
            backgroundColor: "#E0DDCF",
            boxShadow:
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
          }}
        >
          <img src={ButtonLogo} alt="logo" style={{ width: "10rem" }} />
          <Typography variant="body1" sx={{ fontFamily: "Gilroy light" }}>
            Buttons
          </Typography>
        </Box>
        <Box
          sx={{
            m: 2,
            p: 2,

            borderRadius: "25%",
            backgroundColor: "#E0DDCF",
            boxShadow:
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
          }}
        >
          <img src={NavbarLogo} alt="logo" style={{ width: "10rem" }} />
          <Typography variant="body1" sx={{ fontFamily: "Gilroy light" }}>
            Navbars
          </Typography>
        </Box>
        <Box
          sx={{
            m: 2,
            p: 2,

            borderRadius: "25%",
            backgroundColor: "#E0DDCF",
            boxShadow:
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
          }}
        >
          <img src={CardLogo} alt="logo" style={{ width: "10rem" }} />
          <Typography variant="body1" sx={{ fontFamily: "Gilroy light" }}>
            Cards
          </Typography>
        </Box>
        <Box
          sx={{
            m: 2,
            p: 2,

            borderRadius: "25%",
            backgroundColor: "#E0DDCF",
            boxShadow:
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
          }}
        >
          <img src={TypographyLogo} alt="logo" style={{ width: "10rem" }} />
          <Typography variant="body1" sx={{ fontFamily: "Gilroy light" }}>
            Typography
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
