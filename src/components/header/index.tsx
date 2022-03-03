import React from "react";
import { Box, Typography } from "@mui/material";

export const Header = () => {
  return (
    <Box
      textAlign="center"
      boxShadow="0px 2px 8px rgba(136, 136, 136, 0.15)"
      sx={{
        backgroundColor: "white",
      }}
    >
      <Box py={5} textAlign="center">
        <Typography variant="h4" color="primary.main" mr={1} fontWeight={700}>
          unique
        </Typography>
      </Box>
    </Box>
  );
};
