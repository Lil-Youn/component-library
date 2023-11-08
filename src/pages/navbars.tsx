import { Container, Box, Typography, Divider } from "@mui/material";
import NavbarLogo from "../assets/logo svgs/navbars.svg";
import ArrowAppBar from "../components/navbars/arrow-navbar";
import ResponsiveAppBar from "../components/navbars/responsive-navbar";

function Site2() {
  const downloadTextFile = (fileName: string) => {
    fetch(`src/components/navbars/${fileName}`)
      .then((response) => response.text())
      .then((text) => {
        const blob = new Blob([text], { type: "text/plain" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
      });
  };

  return (
    <Container>
      <img src={NavbarLogo} alt="logo" style={{ width: "25rem" }} />
      <Box sx={{ my: 2 }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{ fontFamily: "Gilroy extra bold" }}
        >
          Navbars
        </Typography>
        <Typography variant="h5" sx={{ fontFamily: "Gilroy light" }}>
          Some Navbars I designed recently.
        </Typography>
      </Box>
      <Box sx={{ my: 2, display: "flex", justifyContent: "center" }}>
        <Box
          onClick={() => downloadTextFile("arrow-navbar.txt")}
          sx={{
            cursor: "pointer",
            m: 2,
            p: 2,
            color: "black",
            textDecoration: "none",
            borderRadius: "50px",
            backgroundColor: "#E0DDCF",
            boxShadow:
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "30%",
          }}
        >
          <ArrowAppBar />
          <Divider sx={{ width: "100%", marginTop: "1rem" }} />
          <Typography variant="h5" sx={{ fontFamily: "Gilroy light" }}>
            Simple and Clean Arrow Navigation
          </Typography>
        </Box>
        <Box
          onClick={() => downloadTextFile("responsive-navbar.txt")}
          sx={{
            cursor: "pointer",
            m: 2,
            p: 2,
            color: "black",
            textDecoration: "none",
            borderRadius: "50px",
            backgroundColor: "#E0DDCF",
            boxShadow:
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "30%",
          }}
        >
          <ResponsiveAppBar />
          <Divider sx={{ width: "100%", marginTop: "1rem" }} />
          <Typography variant="h5" sx={{ fontFamily: "Gilroy light" }}>
            Clean Navigation Bar / Responsive
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Site2;
