import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Tabs,
  Tab,
  TextField,
  Paper,
} from "@mui/material";

export default function MessageCenter({ open, onClose }) {
  const [tabIndex, setTabIndex] = useState(0);
  const [message, setMessage] = useState("");
  const [recording, setRecording] = useState(false);
  const [audioList, setAudioList] = useState([]);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleSendText = () => {
    console.log("Message sent:", message);
    setMessage("");
    alert("Mock SMS sent!");
  };

  const handleStartRecording = () => {
    setRecording(true);
    console.log("Recording started");
  };

  const handleStopRecording = () => {
    setRecording(false);
    const mockAudio = `Audio_${audioList.length + 1}.mp3`;
    setAudioList([...audioList, mockAudio]);
    console.log("Recording stopped:", mockAudio);
  };

  if (!open) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        bgcolor: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(10px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2000,
      }}
    >
      <Paper
        sx={{
          width: { xs: "90%", sm: 500 },
          p: 3,
          borderRadius: 3,
          bgcolor: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(15px)",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography variant="h6">Offline Message</Typography>
          <Button onClick={onClose} sx={{ color: "white" }}>
            ✕
          </Button>
        </Box>

        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab label="Send Text" />
          <Tab label="Record Audio" />
        </Tabs>

        {tabIndex === 0 && (
          <Box sx={{ mt: 2 }}>
            <TextField
              multiline
              fullWidth
              minRows={4}
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{
                bgcolor: "rgba(255,255,255,0.1)",
                borderRadius: 2,
                "& .MuiInputBase-input": { color: "white" },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2, width: "100%" }}
              onClick={handleSendText}
            >
              Send as SMS (mock)
            </Button>
          </Box>
        )}

        {tabIndex === 1 && (
          <Box sx={{ mt: 2 }}>
            <Typography>{recording ? "Recording..." : "Not recording"}</Typography>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleStartRecording}
              sx={{ mt: 1, mr: 1 }}
              disabled={recording}
            >
              Start Recording
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleStopRecording}
              sx={{ mt: 1 }}
              disabled={!recording}
            >
              Stop
            </Button>
            <Box sx={{ mt: 2 }}>
              {audioList.map((audio, index) => (
                <Typography key={index}>🎵 {audio}</Typography>
              ))}
            </Box>
          </Box>
        )}
      </Paper>
    </Box>
  );
}
