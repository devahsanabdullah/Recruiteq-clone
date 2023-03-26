import React from "react";
import "./Footer.css";
import {
  Grid,
  Box,
  Typography,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import FooterDropDown from "../page Components/FooterDropDown";
export default function Footer() {
  return (
    <div>
      <Grid container sx={{ marginTop: "10%" }}>
        <Grid item md={12} xs={12} className="footer">
          <Box>
            <Box
              sx={{
                display: { md: "flex", xs: "none" },
                justifyContent: "space-evenly",
              }}
            >
              <Box>
                <Typography variant="h6">Product</Typography>
                <Typography sx={{ margin: "15px auto",cursor:'pointer' }}>
                  LandingPage
                </Typography>
                <Typography sx={{ margin: "15px auto",cursor:'pointer' }}>Features</Typography>
                <Typography sx={{ margin: "15px auto",cursor:'pointer' }}>
                  Documentation
                </Typography>
                <Typography sx={{ margin: "15px auto",cursor:'pointer' }}>
                  Referral Programs
                </Typography>
                <Typography sx={{ margin: "15px auto",cursor:'pointer' }}>Pricing</Typography>
              </Box>
              <Box>
                <Typography variant="h6">Services</Typography>
                <Typography sx={{ margin: "15px auto",cursor:'pointer' }}>
                  Documentation
                </Typography>
                <Typography sx={{ margin: "15px auto",cursor:'pointer' }}>Design</Typography>
                <Typography sx={{ margin: "15px auto",cursor:'pointer' }}>Themes</Typography>
                <Typography sx={{ margin: "15px auto",cursor:'pointer' }}>
                  Illustrations
                </Typography>
                <Typography sx={{ margin: "15px auto",cursor:'pointer' }}>UI Kits</Typography>
              </Box>
              <Box>
                <Typography variant="h6">Company</Typography>
                <Typography sx={{ margin: "15px auto",cursor:'pointer' }}>Abouts</Typography>
                <Typography sx={{ margin: "15px auto",cursor:'pointer' }}>Terms</Typography>
                <Typography sx={{ margin: "15px auto",cursor:'pointer' }}>
                  Privacy Policies
                </Typography>
                <Typography sx={{ margin: "15px auto",cursor:'pointer' }}>Careers</Typography>
              </Box>
              <Box>
                <Typography variant="h6">More</Typography>
                <Typography sx={{ margin: "15px auto",cursor:'pointer' }}>
                  Documentation
                </Typography>
                <Typography sx={{ margin: "15px auto",cursor:'pointer' }}>Licence</Typography>
                <Typography sx={{ margin: "15px auto",cursor:'pointer' }}>ChangeLog</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: { md: "none", xs: "block" } }}>
            <FooterDropDown />
          </Box>
          <Divider
            sx={{
              backgroundColor: "white",
              width: "80%",
              margin: "30px auto",
              height: "2px",
              borderRadius: "10px",
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "40%",
              margin: "0px auto",
            }}
          >
            <Box>
              <LinkedInIcon sx={{ fontSize: "40px" }} />
            </Box>
            <Box>
              <FacebookIcon sx={{ fontSize: "40px" }} />
            </Box>
            <Box>
              <InstagramIcon sx={{ fontSize: "40px" }} />
            </Box>
          </Box>
          <Box
            sx={{ textAlign: "center", marginTop: "40px" }}
          >
            <Typography
              variant="h4"
              sx={{ color: "white", fontSize: "25px", textAlign: "center" }}
            >
              RecruiteQ
            </Typography>
            <Typography>Copyright &copy; 2023 </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
