import React from "react";
import IcoMoon from "react-icomoon";
const iconSet = require("./webicon.json");

const Icon = ({ ...props }) => {
  return <IcoMoon iconSet={iconSet} {...props} />;
};

export default Icon;