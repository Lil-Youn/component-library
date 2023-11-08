import { Container, Box, Typography } from "@mui/material";
import CardLogo from "../assets/logo svgs/cards.svg";

function Site3() {
  return (
    <Container>
      <img className="site-logo" src={CardLogo} alt="logo" />
      <Box sx={{ my: 2 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontFamily: "Gilroy extra bold" }}
        >
          Cards
        </Typography>
        <Typography variant="h5" sx={{ fontFamily: "Gilroy light" }}>
          Some Cards and Boxes i designed recently.
        </Typography>
      </Box>
      <Box
        className="site-box"
        sx={{ my: 2, display: "flex", justifyContent: "center" }}
      >
        <Box className="site-content-box"></Box>
      </Box>
    </Container>
  );
}

export default Site3;
