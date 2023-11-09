import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

type CloseButtonProps = {
  style?: React.CSSProperties;
};

function CloseButton({ style }: CloseButtonProps) {
  return (
    <Button
      color="inherit"
      size="small"
      component={Link}
      to="/"
      sx={{
        display: "flex",

        transition: "background-color 0.3s",
        "&:hover": {
          backgroundColor: "transparent",
        },
        ...style, // Apply external styles
      }}
    >
      <Close />
    </Button>
  );
}

export default CloseButton;
