import { Box, Container, Divider, Typography } from "@mui/material";
import MenuLogo from "../assets/logo svgs/menu.svg";
import BasicSpeedDial from "../components/menus/speed dial/speed-dial";
import CloseButton from "../components/buttons/close button/close-button";

function Site5() {
  const downloadTextFile = (fileName: string) => {
    fetch(`src/components/menus/speed dial/${fileName}`)
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
      <CloseButton
        style={{
          position: "fixed",
          top: "10px",
          right: "10px",
          backgroundColor: "orange",
        }}
      />{" "}
      <img className="site-logo" src={MenuLogo} alt="logo" />
      <Box sx={{ my: 2 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontFamily: "Gilroy extra bold" }}
        >
          Menus
        </Typography>
        <Typography variant="h5" sx={{ fontFamily: "Gilroy light" }}>
          Some Menus i designed recently.
        </Typography>
      </Box>
      <Box
        className="site-box"
        sx={{ my: 2, display: "flex", justifyContent: "center" }}
      >
        <Box
          className="site-content-box"
          onClick={() => downloadTextFile("speed-dial.txt")}
        >
          <BasicSpeedDial />
          <Divider sx={{ width: "100%", marginTop: "1rem" }} />
          <Typography variant="h5" sx={{ fontFamily: "Gilroy light" }}>
            Pulsating Speed Dial
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Site5;
