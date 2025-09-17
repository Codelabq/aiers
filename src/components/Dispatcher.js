import React from "react";
import { Box, Typography, Paper, List, ListItem, ListItemText, Button } from "@mui/material";

const dispatcherData = {
  vehicles: [
    { id: "A001", type: "Ambulance", status: "Available" },
    { id: "F001", type: "Fire Truck", status: "On Mission" },
    { id: "P001", type: "Police Car", status: "Available" },
  ],
  incidents: [
    { id: 1, type: "Accident", location: "Aleppo", assignedTo: "A001" },
    { id: 2, type: "Fire", location: "Damascus", assignedTo: "F001" },
  ],
};

export default function Dispatcher() {
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 3, color: "primary.main" }}>
        📞 Dispatcher Dashboard
      </Typography>

      
      <Paper sx={{ p: 3, mb: 4, borderRadius: 3, backdropFilter: "blur(10px)", background: "rgba(255,255,255,0.05)" }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Vehicles
        </Typography>
        <List>
          {dispatcherData.vehicles.map((v) => (
            <ListItem key={v.id} sx={{ mb: 1, borderRadius: 2, background: "rgba(255,255,255,0.08)" }}>
              <ListItemText
                primary={`${v.type} - ${v.id}`}
                secondary={`Status: ${v.status}`}
                sx={{ color: "white" }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>

      
      <Paper sx={{ p: 3, borderRadius: 3, backdropFilter: "blur(10px)", background: "rgba(255,255,255,0.05)" }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Current Incidents
        </Typography>
        <List>
          {dispatcherData.incidents.map((incident) => (
            <ListItem key={incident.id} sx={{ mb: 1, borderRadius: 2, background: "rgba(255,255,255,0.08)" }}>
              <ListItemText
                primary={`${incident.type} - ${incident.location}`}
                secondary={`Assigned To: ${incident.assignedTo}`}
                sx={{ color: "white" }}
              />
              <Button variant="contained" color="secondary">
                Reassign
              </Button>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
