import React from "react";
import { Box } from "native-base";
const AppScreen = ({ children }) => {
  return (
    <Box flex="1" safeArea style={{ backgroundColor: "#fff" }}>
      {children}
    </Box>
  );
};

export default AppScreen;
