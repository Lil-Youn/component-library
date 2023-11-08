import { Box, Container, Typography } from "@mui/material";
import TypographyLogo from "../assets/logo svgs/text.svg";

function Site4() {
  return (
    <Container>
      <img src={TypographyLogo} alt="logo" style={{ width: "25rem" }} />
      <Box sx={{ my: 2 }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{ fontFamily: "Gilroy extra bold" }}
        >
          Typography
        </Typography>
        <Typography variant="h5" sx={{ fontFamily: "Gilroy light" }}>
          Some Typography designs i made recently.
        </Typography>
      </Box>
      <Box sx={{ my: 2, display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            m: 2,
            p: 2,
            color: "black",
            textDecoration: "none",
            borderRadius: "25%",
            backgroundColor: "#E0DDCF",
            boxShadow:
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
          }}
        ></Box>
      </Box>
    </Container>
  );
}

export default Site4;
