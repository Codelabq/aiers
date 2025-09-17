import React from "react";
import { Box, Typography, Paper } from "@mui/material";

export default function MapComponent({ mapData }) {
  return (
    <Paper
      sx={{
        mt: 3,
        height: "400px",
        borderRadius: "16px",
        overflow: "hidden",
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(10px)",
      }}
    >
      {mapData ? (
        <Box sx={{ width: "100%", height: "100%" }}>
         
          <Typography
            sx={{
              color: "white",
              textAlign: "center",
              mt: 2,
              fontWeight: "bold",
            }}
          >
            Map will be displayed here
          </Typography>
        </Box>
      ) : (
        <Typography
          sx={{
            color: "white",
            textAlign: "center",
            mt: 2,
            fontWeight: "bold",
          }}
        >
          Map From Back-end
        </Typography>
      )}
    </Paper>
  );
}
