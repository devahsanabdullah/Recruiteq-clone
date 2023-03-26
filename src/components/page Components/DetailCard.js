import React from "react";
import { Grid, Box, Button, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShareIcon from "@mui/icons-material/Share";
import {
  CardTypographyHeading,
  CTsubheading,
  CTbody,
  CTbodyskill,
  skill,
  CardContainer
} from "../Style.js";
export default function DetailCard() {
  return (
    <div>
      <Grid container sx={CardContainer}>
        <Grid item xs={8} md={7}>
          <Typography variant="h4" sx={CardTypographyHeading}>
            Job Title
          </Typography>
          <Typography variant="h6" sx={CTsubheading}>
            Company Name
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
            }}
          >
            <LocationOnIcon />
            <Typography sx={CTbody}>Location</Typography>
            <Typography sx={CTbody}>posted 1 d ago</Typography>
          </Box>
          <Box sx={{margin:'20px 0px'}}>
            <Typography variant="h4" sx={skill}>
              Skills
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
            }}
          >
            <Typography sx={CTbodyskill}>Content Writing</Typography>
            <img height={20} width={20} src="aws.png" />
            <Typography sx={CTbodyskill}>User InterFace Design</Typography>
          </Box>
        </Grid>
        <Grid item xs={4} md={5} sx={{ fontSize: "20px" }}>
          <BookmarkBorderIcon />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MonetizationOnIcon />
            <Typography
              sx={{ fontSize: { md: "16px", xs: "12px" }, color: "#2149A2" }}
            >
              Salary Range
            </Typography>
          </Box>
          <Typography sx={{ fontSize: { md: "20px", xs: "16px" } }}>
            $5000-$12000
          </Typography>
          <Typography
            sx={{
              fontSize: { md: "16px", xs: "12px" },
              color: "#2149A2",
              marginTop: "15px",
            }}
          >
            Affiliation Budget
          </Typography>
          <Typography sx={{ fontSize: { md: "18px", xs: "16px" } }}>
            $4000
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} sx={{ textAlign: "right",margin:'10px 0px' }}>
          <Button variant="contained">
            <Typography sx={{ fontSize: "13px" }}>Apply Now</Typography>
          </Button>
          <Button variant="outlined" sx={{ margin: "0px 10px" }}>
            <Typography sx={{ fontSize: "10px" }}>Share</Typography>{" "}
            <ShareIcon />
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
