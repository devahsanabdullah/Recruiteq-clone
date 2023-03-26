import React from "react";
import "./Howto.css";
import { Grid, Typography, Box } from "@mui/material";
import { howtouseContainer, HowtoUseTypography } from "../Style";
export default function Howto() {
  return (
    <div>
      <Grid container sx={howtouseContainer}>
        <img alt="img" src="Rectangle 24.png" className="bgimg" />
        <Grid
          item
          xs={12}
          md={4}
          sx={{ margin: "0px auto", display: "flex", alignItems: "center" }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{ fontSize: "20px", textAlign: { md: "left", xs: "center" } }}
            >
              How To Use.?
            </Typography>
            <Typography variant="h3" sx={HowtoUseTypography}>
              Follow
            </Typography>
            <Typography variant="h3" sx={HowtoUseTypography}>
              4 Easy Steps.
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                textAlign: { md: "left", xs: "center" },
              }}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </Typography>
            <Box
              sx={{ display: { md: "block", xs: "none" }, margin: "20px 0px" }}
            >
              <img alt="img" src="Group 70.png" />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={5}
          md={3.5}
          sx={{ margin: { md: "0px auto", xs: "40px auto" } }}
        >
          <Box className="childBox">
            <Box>
              <img alt="img" src="Ellipse 218.png" className="img" />
            </Box>
            <Box className="grandChildBox">
              <img alt="img" src="Group 343.png" className="imgdot" />
              <img alt="img" src="Group 163196.png" />
            </Box>
          </Box>
          <Box className="grandChildBox">
            <img alt="img" src="Group 343.png" className="imgdot" />
            <img alt="img" src="Group 163195.png" />
          </Box>
        </Grid>
        <Grid
          item
          xs={5}
          md={3.5}
          sx={{ margin: { md: "40px auto", xs: "0px auto" } }}
        >
          <Box className="childBox">
            <Box className="grandChildBox">
              <img alt="img" src="Group 343.png" className="imgdot" />
              <img alt="img" src="Group 163193.png" />
            </Box>
          </Box>
          <Box className="grandChildBox">
            <img alt="img" src="Group 343.png" className="imgdot" />
            <img alt="img" src="Group 163194.png" />
          </Box>
          <img alt="img" src="Ellipse 87.png" className="circle" />
        </Grid>
      </Grid>
    </div>
  );
}
