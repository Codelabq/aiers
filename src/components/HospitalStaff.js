import React from "react";
import { Box, Typography, Paper, List, ListItem, ListItemText, Button } from "@mui/material";

const staffData = {
  ambulances: 5,
  fireTrucks: 2,
  staffAvailable: 8,
  incidents: [
    { id: 1, type: "Accident", location: "Homs", severity: "High" },
    { id: 2, type: "Medical Emergency", location: "Damascus", severity: "Medium" },
  ],
};

export default function HospitalStaff() {
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 3, color: "primary.main" }}>
        🏥 Hospital Staff Dashboard
      </Typography>

      
      <Paper sx={{ p: 3, mb: 4, borderRadius: 3, backdropFilter: "blur(10px)", background: "rgba(255,255,255,0.05)" }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Resource Overview
        </Typography>
        <Typography>Ambulances: {staffData.ambulances}</Typography>
        <Typography>Fire Trucks: {staffData.fireTrucks}</Typography>
        <Typography>Staff Available: {staffData.staffAvailable}</Typography>
      </Paper>

      
      <Paper sx={{ p: 3, borderRadius: 3, backdropFilter: "blur(10px)", background: "rgba(255,255,255,0.05)" }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Current Incidents
        </Typography>
        <List>
          {staffData.incidents.map((incident) => (
            <ListItem key={incident.id} sx={{ mb: 1, borderRadius: 2, background: "rgba(255,255,255,0.08)" }}>
              <ListItemText
                primary={`${incident.type} - ${incident.location}`}
                secondary={`Severity: ${incident.severity}`}
                sx={{ color: "white" }}
              />
              <Button variant="contained" color="secondary">
                Assign
              </Button>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
