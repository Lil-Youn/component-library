import { Box, Container, Divider, Typography } from "@mui/material";
import TypographyLogo from "../assets/logo svgs/text.svg";
import ThreeDTypo from "../components/typography/3D-Typography/3d-typo";
import CloseButton from "../components/buttons/close button/close-button";

function Site4() {
  const downloadTextFile = (fileName: string) => {
    fetch(`src/components/typography/3D-Typography/${fileName}`)
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
      <img className="site-logo" src={TypographyLogo} alt="logo" />
      <Box sx={{ my: 2 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontFamily: "Gilroy extra bold" }}
        >
          Typography
        </Typography>
        <Typography variant="h5" sx={{ fontFamily: "Gilroy light" }}>
          Some Typography designs i made recently.
        </Typography>
      </Box>
      <Box
        className="site-box"
        sx={{ my: 2, display: "flex", justifyContent: "center" }}
      >
        <Box
          onClick={() => downloadTextFile("3d-typo.txt")}
          className="site-content-box"
        >
          <ThreeDTypo />
          <Divider sx={{ width: "100%", marginTop: "1rem" }} />
          <Typography variant="h5" sx={{ fontFamily: "Gilroy light" }}>
            3D Typography
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Site4;
