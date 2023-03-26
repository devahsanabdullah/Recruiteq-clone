import React, { useState } from "react";
import {
  AppBar,
  Box,
  Grid,
  Typography,
  Button,
  Toolbar,
  IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import './Header.css'
import ArticleIcon from "@mui/icons-material/Article";
import EmailIcon from "@mui/icons-material/Email";
import HelpIcon from "@mui/icons-material/Help";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeDrawer from "./SwipeDrawer";
import HeaderCap from "./HeaderCap";
import Partners from "../Partner Companies/Partners";
export default function Header() {
    let [state,setstate] =useState(false);
    function changeState()
    {
        setstate(true)
    }
    function close()
    {
        setstate(false)
    }
  return (
    <>
      <Grid container className="HeaderContainer" sx={{maxWidth:'1280px'}}>
        <Grid item xs={4} md={6}>
          <Typography
            sx={{
              fontSize: "25px",
              fontWeight: "bold",
              textAlign: "left",
              margin: { md: "0px 70px", xs: "0px 10px" },
            }}
          >
            Recruiteq
          </Typography>
        </Grid>
        <Grid item xs={8} md={6}>
          <Box
            sx={{
              display: { md: "flex", xs: "none" },
              justifyContent: "space-around",
            }}
          >
            <IconButton>
              <HomeIcon />
              Home
            </IconButton>
            <IconButton>
              <ArticleIcon />
              Jobs
            </IconButton>
            <IconButton>
              <EmailIcon />
              Message
            </IconButton>
            <IconButton>
              <NotificationImportantIcon />
              Notifications
            </IconButton>
            <IconButton>
              <HelpIcon />
              Help
            </IconButton>
          </Box>
          <Box
            sx={{
              display: { md: "none", xs: "block" },
              justifyContent: "right",
              textAlign: "right",
            }}
          >
            <IconButton onClick={changeState}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Grid>

        <SwipeDrawer state={state} close={close} />
      </Grid>
    <HeaderCap />
    <Partners/>
    </>
  );
}
