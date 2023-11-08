import { Box, Container, Typography } from "@mui/material";
import ButtonLogo from "../assets/logo svgs/button.svg";

function Site1() {
  return (
    <Container>
      <img className="site-logo" src={ButtonLogo} alt="logo" />
      <Box sx={{ my: 2 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontFamily: "Gilroy extra bold" }}
        >
          Buttons
        </Typography>
        <Typography variant="h5" sx={{ fontFamily: "Gilroy light" }}>
          Some Buttons i designed recently.
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

export default Site1;
