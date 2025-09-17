import React, { useState } from "react";
import {
  CssBaseline,
  Box,
  Container,
  Typography,
  Select,
  MenuItem,
  Drawer,
  IconButton,
  Toolbar,
  AppBar,
  ThemeProvider,
  createTheme,
  Paper,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import EmergencyDriver from "./components/EmergencyDriver";
import HospitalStaff from "./components/HospitalStaff";
import Dispatcher from "./components/Dispatcher";
import MessageCenter from "./components/MessageCenter"; 

const drawerWidth = 260;


const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#6C63FF" },
    secondary: { main: "#FF6584" },
    background: {
      default: "#0f0f1a",
      paper: "rgba(255, 255, 255, 0.08)",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [role, setRole] = useState("");
  const [messageOpen, setMessageOpen] = useState(false); 

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        p: 3,
        height: "100%",
        backdropFilter: "blur(20px)",
        background: "rgba(255, 255, 255, 0.06)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{ fontWeight: "bold", color: "primary.main" }}
      >
        Emergency System
      </Typography>

      <Select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        displayEmpty
        fullWidth
        sx={{
          mt: 2,
          borderRadius: "12px",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(20px)",
          color: "white",
          "& .MuiSelect-icon": { color: "white" },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              background: "rgba(255,255,255,0.1)", 
              backdropFilter: "blur(20px)",
              color: "white",
            },
          },
        }}
      >
        <MenuItem value="">Select Role</MenuItem>
        <MenuItem value="driver">🚑 Emergency Driver</MenuItem>
        <MenuItem value="staff">🏥 Hospital Staff</MenuItem>
        <MenuItem value="dispatcher">📞 Dispatcher</MenuItem>
      </Select>

      
      <Button
        variant="contained"
        color="secondary"
        sx={{ mt: 4, borderRadius: 2 }}
        onClick={() => setMessageOpen(true)}
        disabled={role !== "dispatcher"}
      >
        📧 Message Center
      </Button>
    </Box>
  );

  const renderComponent = () => {
    switch (role) {
      case "driver":
        return <EmergencyDriver />;
      case "staff":
        return <HospitalStaff />;
      case "dispatcher":
        return <Dispatcher />;
      default:
        return (
          <Paper
            sx={{
              p: 3,
              mt: 3,
              borderRadius: "20px",
              textAlign: "center",
              background:
                "linear-gradient(135deg, rgba(108,99,255,0.15), rgba(255,101,132,0.15))",
              backdropFilter: "blur(10px)",
            }}
          >
            <Typography variant="h6" sx={{ color: "white" }}>
              Please select your role from the sidebar.
            </Typography>
          </Paper>
        );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          background: "linear-gradient(135deg, #1e1e2f, #151521)",
        }}
      >
        <CssBaseline />
        
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(15px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap sx={{ fontWeight: "bold" }}>
              🚨 Emergency Dashboard
            </Typography>
          </Toolbar>
        </AppBar>

        
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="sidebar"
        >
          
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                borderRight: "1px solid rgba(255,255,255,0.2)",
              },
            }}
          >
            {drawer}
          </Drawer>

          
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                borderRight: "1px solid rgba(255,255,255,0.2)",
                background: "transparent",
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>

        
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 4,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            minHeight: "100vh",
            color: "white",
          }}
        >
          <Toolbar /> 
          <Container>{renderComponent()}</Container>
        </Box>

        
        <MessageCenter
          open={messageOpen}
          onClose={() => setMessageOpen(false)}
        />
      </Box>
    </ThemeProvider>
  );
}
