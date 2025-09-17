import React from "react";
import { Box, Typography, Paper, List, ListItem, ListItemText, Button } from "@mui/material";
import MapComponent from "./MapComponent.js";  
const driverData = {
  incidents: [
    { id: 1, type: "Accident", location: "Damascus", status: "Pending" },
    { id: 2, type: "Fire", location: "Aleppo", status: "Ongoing" },
  ],
  vehicles: [
    { id: "A001", type: "Ambulance", status: "Available" },
    { id: "A002", type: "Ambulance", status: "On Mission" },
  ],
};

export default function EmergencyDriver() {
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 3, color: "primary.main" }}>
        🚑 Emergency Driver Dashboard
      </Typography>  
      
      <MapComponent  />
      <br/>
      
      <Paper sx={{ p: 3, mb: 4, borderRadius: 3, backdropFilter: "blur(10px)", background: "rgba(255,255,255,0.05)" }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Active Incidents
        </Typography>
        <List>
          {driverData.incidents.map((incident) => (
            <ListItem key={incident.id} sx={{ mb: 1, borderRadius: 2, background: "rgba(255,255,255,0.08)" }}>
              <ListItemText
                primary={`${incident.type} - ${incident.location}`}
                secondary={`Status: ${incident.status}`}
                sx={{ color: "white" }}
              />
              <Button variant="contained" color="secondary">
                Navigate
              </Button>
            </ListItem>
          ))}
        </List>
      </Paper>

      
      <Paper sx={{ p: 3, borderRadius: 3, backdropFilter: "blur(10px)", background: "rgba(255,255,255,0.05)" }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Vehicles
        </Typography>
        <List>
          {driverData.vehicles.map((vehicle) => (
            <ListItem key={vehicle.id} sx={{ mb: 1, borderRadius: 2, background: "rgba(255,255,255,0.08)" }}>
              <ListItemText
                primary={`${vehicle.type} - ${vehicle.id}`}
                secondary={`Status: ${vehicle.status}`}
                sx={{ color: "white" }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
