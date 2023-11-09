import { Container, Box, Typography, Divider } from "@mui/material";
import NavbarLogo from "../assets/logo svgs/navbars.svg";
import ArrowAppBar from "../components/navbars/arrow-navbar";
import ResponsiveAppBar from "../components/navbars/responsive-navbar";
import CloseButton from "../components/buttons/close button/close-button";

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
      <CloseButton style={{ position: "fixed", top: "10px", right: "10px" }} />
      <img className="site-logo" src={NavbarLogo} alt="logo" />
      <Box sx={{ my: 2 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontFamily: "Gilroy extra bold" }}
        >
          Navbars
        </Typography>
        <Typography variant="h5" sx={{ fontFamily: "Gilroy light" }}>
          Some Navbars I designed recently.
        </Typography>
      </Box>
      <Box
        className="site-box"
        sx={{ my: 2, display: "flex", justifyContent: "center" }}
      >
        <Box
          className="site-content-box"
          onClick={() => downloadTextFile("arrow-navbar.txt")}
        >
          <ArrowAppBar />
          <Divider sx={{ width: "100%", marginTop: "1rem" }} />
          <Typography variant="h5" sx={{ fontFamily: "Gilroy light" }}>
            Simple and Clean Arrow Navigation
          </Typography>
        </Box>
        <Box
          className="site-content-box"
          onClick={() => downloadTextFile("responsive-navbar.txt")}
        >
          <ResponsiveAppBar />
          <Divider sx={{ width: "100%", marginTop: "1rem" }} />
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Gilroy light",
            }}
          >
            Clean Navigation Bar / Responsive
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Site2;
