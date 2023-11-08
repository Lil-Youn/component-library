import React from "react";
import SpeedDialTransition from "@mui/material/SpeedDial";

export const SpeedDialPulsateTransition = React.forwardRef(function Transition(
  props,
  ref
) {
  return <SpeedDialTransition {...props} ref={ref} />;
});
