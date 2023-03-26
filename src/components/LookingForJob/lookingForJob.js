import { Typography, Grid, Box, Divider } from "@mui/material";
import React from "react";
import { LookingForJobItems, LookingForJobItems2 } from "../Style.js";
import "./LookingForJob.css";
export default function LookingForJob() {
  return (
    <div>
      <Grid
        container
        className="parentContainer"
        sx={{
          width: { lg: "100%", xl: "1280px" },
          padding:{md:"50px",xs:'0px'},
        }}
      >
        <Grid item md={12} xs={12}>
          <Typography
            variant="h3"
            sx={{ fontSize: { md: "45px", xs: "30px" } }}
          >
            Looking For a Job?
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontSize: { md: "45px", xs: "30px" } }}
          >
            Or Hire An Employees?
          </Typography>
        </Grid>
        <Grid item md={5} xs={12} sx={LookingForJobItems}>
          <Box>
            <img alt="img" src="Group 163205.png" />
            <Typography
              variant="h5"
              sx={{
                width: "60%",
                margin: "0px auto",
                fontSize: { md: "25px", xs: "20px" },
              }}
            >
              Looking For A Job?
            </Typography>
            <Typography>Hurry up find the specific</Typography>
            <Typography>
              {" "}
              job accordingly your requirements and apply.
            </Typography>
            <Box className="childbox" sx={{ margin: "30px auto" }}>
              <img alt="img" src="Group 163204.png" />
            </Box>
          </Box>
        </Grid>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            width: "5px",
            border: "none",
            backgroundColor: "white",
            margin: "10px 0px",
          }}
        />
        <Grid item md={5} xs={12} sx={LookingForJobItems2}>
          <Box sx={{ display: { md: "none" } }}>
            <img alt="img" src="Group 163232.png" />
          </Box>
          <Box>
            <img
              alt="img"
              style={{ height: "97.66px", width: "97.66px" }}
              src="Group 163203@2x.png"
            />
            <Typography
              variant="h5"
              sx={{
                width: "60%",
                margin: "0px auto",
                fontSize: { md: "25px", xs: "20px" },
              }}
            >
              Looking To Hire Employees?
            </Typography>
            <Typography>Hurry up find the specific </Typography>
            <Typography>
              job accordingly your requirements and apply.
            </Typography>
            <Box className="childbox" sx={{ margin: "30px auto" }}>
              <img alt="img" src="Group 163207.png" />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
