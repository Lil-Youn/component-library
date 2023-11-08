import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { To, useNavigate } from "react-router-dom";
import "./speedDialStyles.css";
const actions = [
  {
    icon: <FormatListNumberedIcon />,
    name: "Ingredients",
    link: "/ingredients",
  },
  { icon: <MenuBookIcon />, name: "Recipes", link: "/recipes" },
];

export default function BasicSpeedDial() {
  const navigate = useNavigate();

  const handleSpeedDialActionClick = (link: To) => {
    navigate(link);
  };

  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{
        position: "relative",

        animation: "pulsate 2.5s infinite",
      }}
      icon={<LocalDiningIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => handleSpeedDialActionClick(action.link)}
        />
      ))}
    </SpeedDial>
  );
}
