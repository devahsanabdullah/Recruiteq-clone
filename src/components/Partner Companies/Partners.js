import { Grid,Typography } from "@mui/material";
import React from "react";
import "./Partners.js";
export default function Partners() {
  return (
    <div>
      <Grid container sx={{margin:'50px auto'}}>
        <Grid item xs={12} md={12} sx={{margin:"10px auto"}}>
          <Typography variant="h3" sx={{fontSize:'40px',fontWeight:'bold'}}>Trusted By Global Companies</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
            padding:'50px',
          }}
        >
          <img
            width={150}
            style={{ filter: "opacity(0.5)", margin: "10px auto" }}
            src="apple-11 1.png"
          />
          <img
            width={150}
            style={{ filter: "opacity(0.5)", margin: "10px auto" }}
            src="Group 13.png"
          />
          <img
            width={150}
            style={{ filter: "opacity(0.5)", margin: "10px auto" }}
            src="slack-2 1.png"
          />
          <img
            width={150}
            style={{ filter: "opacity(0.5)", margin: "10px auto" }}
            src="spotify-1 1.png"
          />
          <img
            width={150}
            style={{ filter: "opacity(0.5)", margin: "10px auto" }}
            src="google-2015 1.png"
          />
        </Grid>
      </Grid>
    </div>
  );
}
