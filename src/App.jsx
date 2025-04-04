import { Box, Typography, AppBar, Toolbar } from "@mui/material";
import ChatContainer from "./components/ChatContainer";
import './App.css'
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>  
   
      <AppBar position="fixed" sx={{ backgroundColor: "blue" }}>
        <Toolbar>
          <div style={{marginTop:"4px"}}>
          <SmartToyOutlinedIcon/>
          </div>
          <Typography style={{marginLeft:"8px"}} variant="h6" component="div">
            LSEG Chatbot
          </Typography>
        </Toolbar>
      </AppBar>
  
      

      <Box
        sx={{
          marginTop: "64px",
          height: "calc(100vh - 64px)",
          overflowY: "auto",
          display: "flex",
          justifyContent: "center",
          padding: 2,
          paddingBottom:"28px"
        }}
      >
         <Box sx={{ width: "100%", maxWidth: "600px" }}>
         <ChatContainer />
         </Box>
        
      </Box>
    
    </div>
  );
}

export default App;
