import React from "react";
import { Box, FormControl, Select, InputLabel, MenuItem } from "@mui/material";
export default function FooterDropDown() {
  return (
    <div>
      <Box sx={{ display: { md: "none", xs: "block" }, textAlign: "center" }}>
        <FormControl
          variant="standard"
          sx={{ width: "80%", color: "white", margin: "10px auto" }}
        >
          <InputLabel id="Product" sx={{ color: "white" }}>
            Products
          </InputLabel>
          <Select labelId="product" label="Product">
            <MenuItem>Landing Page</MenuItem>
            <MenuItem>Features</MenuItem>
            <MenuItem>Referral Program</MenuItem>
            <MenuItem>Pricing</MenuItem>
            <MenuItem>Documentation</MenuItem>
          </Select>
        </FormControl>

        <FormControl
          variant="standard"
          sx={{ width: "80%", color: "white", margin: "10px auto" }}
        >
          <InputLabel id="Product" sx={{ color: "white" }}>
            Services
          </InputLabel>
          <Select labelId="product" label="Product">
            <MenuItem>Documentation</MenuItem>
            <MenuItem>Design</MenuItem>
            <MenuItem>Themes</MenuItem>
            <MenuItem>Illustrations</MenuItem>
            <MenuItem>UI Kits</MenuItem>
          </Select>
        </FormControl>

        <FormControl
          variant="standard"
          sx={{ width: "80%", color: "white", margin: "10px auto" }}
        >
          <InputLabel id="Product" sx={{ color: "white" }}>
            Company
          </InputLabel>
          <Select labelId="product" label="Product">
            <MenuItem>About</MenuItem>
            <MenuItem>Terms</MenuItem>
            <MenuItem>Privacy Policy</MenuItem>
            <MenuItem>Careers</MenuItem>
          </Select>
        </FormControl>

        <FormControl
          variant="standard"
          sx={{ width: "80%", color: "white", margin: "10px auto" }}
        >
          <InputLabel id="Product" sx={{ color: "white" }}>
            More
          </InputLabel>
          <Select labelId="product" label="Product">
            <MenuItem>Documentation</MenuItem>
            <MenuItem>licence</MenuItem>
            <MenuItem>ChangeLog</MenuItem>
        
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
