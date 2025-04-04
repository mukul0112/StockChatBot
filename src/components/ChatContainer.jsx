import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import stocksData from "../data/stocks.json";
import ChatBubble from "./ChatBubble";

const ChatContainer = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! Welcome to LSEG. I am here to helo you.",
    },
  ]);
  const [selectedExchange, setSelectedExchange] = useState(null);

  const handleExchangeSelect = (exchange) => {
    setSelectedExchange(exchange);
  };

  const handleStockSelect = (stock) => {
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: stock.stockName },
      {
        sender: "bot",
        text: `Stock Price of ${stock.stockName} is ${stock.price}`,
      },
    ]);
  };

  const goToHome = () => {
    setSelectedExchange(null);
  };

  return (
    <Box sx={{ p: 2, width: "100%" }}>
      {messages.map((msg, index) => (
        <ChatBubble key={index} message={msg.text} sender={msg.sender} />
      ))}

      {!selectedExchange && (
        <Box
          sx={{
            backgroundColor: "#E3F2FD",
            padding: 2,
            borderRadius: 2,
            width: "100%",
            maxWidth: "600px",
          }}
        >
          <Typography sx={{ mb: 1, mt: 1, marginLeft: 1 }}>
            Please select a Stock Exchange.
          </Typography>

          {stocksData.map((exchange) => (
            <Box
              key={exchange.code}
              sx={{
                backgroundColor: "white",
                padding: 0.5,
                borderRadius: 1,
                cursor: "pointer",
                "&:hover": { backgroundColor: "#BBDEFB" },
                borderBottom: "1px solid #ddd",
              }}
              onClick={() => handleExchangeSelect(exchange)}
            >
              {exchange.stockExchange}
            </Box>
          ))}
        </Box>
      )}

      {selectedExchange && (
        <Box
          sx={{
            backgroundColor: "#E3F2FD",
            padding: 2,
            borderRadius: 2,
            width: "100%",
            maxWidth: "600px",
          }}
        >
          <Typography sx={{ mb: 1, mt: 1, marginLeft: 1 }}>
            Please select a stock.
          </Typography>
          {selectedExchange.topStocks.map((stock) => (
            <Box
              key={stock.code}
              sx={{
                backgroundColor: "white",
                padding: 0.5,
                borderRadius: 1,
                cursor: "pointer",
                "&:hover": { backgroundColor: "#BBDEFB" },
                borderBottom: "1px solid #ddd",
              }}
              onClick={() => handleStockSelect(stock)}
            >
              {stock.stockName}
            </Box>
          ))}

          <Box
            sx={{
              textAlign: "center",
              marginTop: 2,
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: "100%",
                backgroundColor: "white",
                color: "black",
                "&:hover": { backgroundColor: "#f5f5f5" },
                textTransform: "none",
              }}
              onClick={goToHome}
            >
              Main menu
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ChatContainer;
