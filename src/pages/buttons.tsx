import { Box, Container, Divider, Typography } from "@mui/material";
import ButtonLogo from "../assets/logo svgs/button.svg";
import CloseButton from "../components/buttons/close button/close-button";
import TransformButton from "../components/buttons/transform button/transform-button";

function Site1() {
  const downloadTextFile = (fileName: string) => {
    fetch(`src/components/buttons/${fileName}`)
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
      />

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
        <Box
          className="site-content-box"
          onClick={() => downloadTextFile("close-button.txt")}
        >
          <CloseButton style={{}} />
          <Divider sx={{ width: "100%", marginTop: "1rem" }} />
          <Typography variant="h5" sx={{ fontFamily: "Gilroy light" }}>
            Small "X" close button
          </Typography>
        </Box>
        <Box
          className="site-content-box"
          onClick={() => downloadTextFile("transform-button.txt")}
        >
          <TransformButton />
          <Divider sx={{ width: "100%", marginTop: "1rem" }} />
          <Typography variant="h5" sx={{ fontFamily: "Gilroy light" }}>
            Clean Button with onHover transform
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Site1;
