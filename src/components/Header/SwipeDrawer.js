import React from "react";
import { Drawer, Box, IconButton, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { drawerbutton } from "../Style.js";
import ArticleIcon from "@mui/icons-material/Article";
import EmailIcon from "@mui/icons-material/Email";
import HelpIcon from "@mui/icons-material/Help";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
export default function SwipeDrawer({ state, close }) {
  return (
    <div>
      <Drawer open={state} anchor={"left"} onClose={close} color="primary">
        <Box sx={{ width: "250px", textAlign: "center" }}>
          <Typography sx={{ color: "#2149A2",fontSize:'30px',fontWeight:'bold',margin:'20px' }}>Recruiteq</Typography>
          <IconButton sx={drawerbutton}>
            <HomeIcon /> <Typography>Home</Typography>
          </IconButton>
          <IconButton sx={drawerbutton}>
            <ArticleIcon /> <Typography>Jobs</Typography>
          </IconButton>
          <IconButton sx={drawerbutton}>
            <EmailIcon /> <Typography>Messages</Typography>
          </IconButton>
          <IconButton sx={drawerbutton}>
            <NotificationImportantIcon /> <Typography>Notifications</Typography>
          </IconButton>
          <IconButton sx={drawerbutton}>
            <HelpIcon /> <Typography>Help</Typography>
          </IconButton>
        </Box>
      </Drawer>
    </div>
  );
}
