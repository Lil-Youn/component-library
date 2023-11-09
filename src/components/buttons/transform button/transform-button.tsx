import { Button } from "@mui/material";

function TransformButton() {
  return (
    <Button
      component="a"
      href="/"
      sx={{
        background: "transparent",
        fontFamily: "Gilroy light",
        fontWeight: 700,
        letterSpacing: ".3rem",
        textDecoration: "none",
        color: "#6D6A75",
        "&:hover": {
          fontFamily: "Gilroy extra bold",

          transition: "text-decoration 0.2s ease-in-out",
          fontSize: "1.1rem",
          fontWeight: 700,
          color: "#DE9E36",
          background: "transparent",
          textShadow: "2px  8px 8px #000",
        },
      }}
    >
      Demo Button
    </Button>
  );
}

export default TransformButton;
