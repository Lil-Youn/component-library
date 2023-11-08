import { Typography } from "@mui/material";

function ThreeDTypo() {
  return (
    <Typography
      variant="h2"
      sx={{
        fontFamily: "Gilroy extra bold",
        marginTop: "2rem",
        textAlign: "left",
        color: "#DE9E36",
        textShadow: "2px  8px 8px #000",
      }}
    >
      "Demo Text"
    </Typography>
  );
}

export default ThreeDTypo;
