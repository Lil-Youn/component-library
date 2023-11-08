import { Box, Container, Divider, Typography } from "@mui/material";
import MenuLogo from "../assets/logo svgs/menu.svg";
import BasicSpeedDial from "../components/menus/speed dial/speed-dial";

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
      <img src={MenuLogo} alt="logo" style={{ width: "25rem" }} />
      <Box sx={{ my: 2 }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{ fontFamily: "Gilroy extra bold" }}
        >
          Menus
        </Typography>
        <Typography variant="h5" sx={{ fontFamily: "Gilroy light" }}>
          Some Menus i designed recently.
        </Typography>
      </Box>
      <Box sx={{ my: 2, display: "flex", justifyContent: "center" }}>
        <Box
          onClick={() => downloadTextFile("speed-dial.txt")}
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
            width: "15%",
          }}
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
