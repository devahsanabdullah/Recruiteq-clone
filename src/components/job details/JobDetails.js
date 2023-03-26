import React from "react";
import "./JobDetails.css";
import { Grid, Box, Typography, Switch } from "@mui/material";
import {
  JobdetailTypography,
  flagBox,
  flagBoxGrid,
  cardContainer,
} from "../Style";
import DetailCard from "../page Components/DetailCard";
let array=[1,2,3,4]
export default function JobDetails() {
  return (
    <div>
      <Grid
        container
        sx={{ marginTop: "8%", textAlign: "center", width: "100%" }}
      >
        <Grid item xs={12} md={12}>
          <Typography variant="h3" sx={JobdetailTypography}>
            Grab These Exciting Offers And{" "}
            <span style={{ color: "#2149A2" }}>Apply Now.!</span>
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "20px auto",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontSize: { md: "18px", xs: "14px" } }}
            >
              Part Time
            </Typography>
            <Switch defaultChecked />
            <Typography
              variant="h5"
              sx={{ fontSize: { md: "18px", xs: "14px" } }}
            >
              Part Time
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={12} sx={flagBoxGrid}>
          <Box sx={flagBox}>
            <img height={41} src="flag.png" alt="flag" />
          </Box>
          <Box sx={{ margin: "5px 20px" }}>
            <img src="Vector 20.png" alt="v20" />
          </Box>
        </Grid>
        <Grid item xs={12} md={12} className="cardContainer">
          <Box
            sx={{
              width: "100%",
              margin: "0px auto",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            {array.map((m) => {
              return <DetailCard />;
            })}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
