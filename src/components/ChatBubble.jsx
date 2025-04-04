import { Box, Typography } from "@mui/material";

const ChatBubble = ({ message, sender }) => {
  let isUser = false;
  if (sender === "user") {
    isUser = true;
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        mb: 1,
      }}
    >
      <Box
        sx={{
          backgroundColor: isUser ? "#e0e0e0" : "#E3F2FD",
          color: isUser ? "black" : "black",
          paddingLeft: 2,
          paddingRight: 2,
          paddingTop: 1,
          paddingBottom: 1,
          borderRadius: "20px",
          maxWidth: "70%",
        }}
      >
        <Typography variant="body1">{message}</Typography>
      </Box>
    </Box>
  );
};

export default ChatBubble;
