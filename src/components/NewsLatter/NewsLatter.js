import React from "react";
import { Grid, Box, Typography, Button, TextField } from "@mui/material";
import "./NewsLatter.css";
import {
  NewsLatterContainerBox,
  NewsLatterImageContainer,
  NewsLatterInnerFlexBox,
  NLInputContainer,
  NLbottomBox,
} from "../Style.js";
export default function NewsLatter() {
  return (
    <div>
      <Grid
        container
        sx={{
          margin: "5% auto",
          padding: "20px",
          position: "relative",
          maxWidth: "1274px",
        }}
      >
        <Box sx={NewsLatterImageContainer}>
          <img src="Group 73.png" />
        </Box>
        <Grid
          item
          xs={12}
          md={12}
          sx={{ textAlign: { md: "left", xs: "center" } }}
        >
          <Box sx={NewsLatterContainerBox}>
            <Box sx={{zIndex:'10000'}}>
              <Typography
                variant="h4"
                sx={{
                  color: { md: "black", xs: "white" },
                  fontSize: { md: "35px", xs: "25px" },
                 
                }}
              >
                Subscribe Newsletter
              </Typography>
              <Typography
                sx={{
                  color: { md: "black", xs: "white" },
                }}
              >
                I will update good news and promotion service not spam
              </Typography>
            </Box>
            <Box sx={NewsLatterInnerFlexBox}>
              <Box sx={NLInputContainer}>
                <input
                  placeholder="News Latter"
                  style={{ padding: "5px", width: "200px", border: "none" }}
                />
                <Button
                  variant="contained"
                  sx={{ borderRadius: "20px", margin: "0px 10px" }}
                >
                  <Typography sx={{ fontSize: { md: "16px", xs: "10px" } }}>
                    Subscribe
                  </Typography>
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",

                right: "50px",
                display: { md: "block", xs: "none" },
              }}
            >
              <Box className="blob"></Box>
            </Box>
          </Box>
        </Grid>
        <Box sx={NLbottomBox}></Box>
      </Grid>
    </div>
  );
}
