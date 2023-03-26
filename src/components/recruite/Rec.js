import React from "react";
import "./Rec.css";
import { Grid, Box, Typography } from "@mui/material";

export default function Rec() {
  return (
    <div>
      <Grid container sx={{ textAlign: "center" }}>
        <Grid item xs={12} md={12} sx={{ margin: "40px auto" }}>
          <Typography
            variant="h3"
            sx={{ fontSize: { md: "30px", xs: "25px" }, color: "black" }}
          >
            Transform The
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontSize: { md: "30px", xs: "25px" } }}
          >
            Way You Recruit Today
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          md={6}
          sx={{ backgroundColor: " rgb(241, 251, 254)" }}
        >
          <Box className="box">
            <Box
              sx={{
                backgroundColor: { md: "transparent", xs: "white" },
                padding: "10px",
                marginTop: { md: "10px", xs: "40px" },
                margin: "10px",
                borderRadius: "20px",
                boxShadow: "0px 0px 4px 4px rgba(240,240,240,0.9)",
                height: "200px",
                width: "200px",
              }}
            >
              <Box>
                <Box className="imgbox">
                  <img alt="img" src="File_dock_add_fill.png" />
                </Box>
                <Typography sx={{ color: " #3975f1" }}>Live Jobs</Typography>
                <Typography
                  variant="h3"
                  sx={{ fontSize: { md: "30px", xs: "25px" } }}
                >
                  1264654
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                backgroundColor: { md: "transparent", xs: "white" },
                padding: "10px",
                margin: "10px",
                borderRadius: "20px",
                boxShadow: "0px 0px 4px 4px rgba(240,240,240,0.9)",
                height: "200px",
                width: "200px",
              }}
            >
              <Box>
                <Box className="imgbox">
                  <img alt="img" src="File_dock_search_fill.png" />
                </Box>
                <Typography sx={{ color: " #3975f1" }}>Candidates</Typography>
                <Typography
                  variant="h3"
                  sx={{ fontSize: { md: "30px", xs: "25px" } }}
                >
                  1200654
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          md={6}
          sx={{ backgroundColor: " rgb(241, 251, 254)" }}
        >
          <Box className="box">
            <Box
              sx={{
                backgroundColor: { md: "transparent", xs: "white" },
                padding: "10px",
                margin: "10px",
                borderRadius: "20px",
                boxShadow: "0px 0px 4px 4px rgba(240,240,240,0.9)",
                height: "200px",
                width: "200px",
              }}
            >
              <Box>
                <Box className="imgbox">
                  <img alt="img" src="User_scan_duotone.png" />
                </Box>
                <Typography sx={{ color: " #3975f1" }}>Resumes</Typography>
                <Typography
                  variant="h3"
                  sx={{ fontSize: { md: "30px", xs: "25px" } }}
                >
                  1266454
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                backgroundColor: { md: "transparent", xs: "white" },
                padding: "10px",
                margin: "10px",
                borderRadius: "20px",
                boxShadow: "0px 0px 4px 4px rgba(240,240,240,0.9)",
                height: "200px",
                width: "200px",
              }}
            >
              <Box>
                <Box className="imgbox">
                  <img alt="img" src="Shop.png" />
                </Box>
                <Typography sx={{ color: " #3975f1" }}>Companies</Typography>
                <Typography
                  variant="h3"
                  sx={{ fontSize: { md: "30px", xs: "25px" } }}
                >
                  1262044
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
