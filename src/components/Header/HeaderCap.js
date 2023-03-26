import React from 'react'
import './Header.css'
import {Grid,Box,Typography, IconButton} from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
export default function HeaderCap() {
  return (
    <div>
      <Box className="capContainer">
        <Grid container className="containerGrid" sx={{padding:{md:'100px',xs:'50px 10px'},justifyContent:{md:'none',xs:'center'}}}>
          
          <Grid item xs={12} md={6} className="typo">
            <Typography sx={{ fontSize: "40px", fontWeight: "bold" }}>
              Dream Jobs
            </Typography>
            <Typography sx={{ fontSize: "40px", fontWeight: "bold" }}>
              Waiting for you.!
            </Typography>
            <Typography sx={{ width: {md:"70%",xs:'100%'}, margin: "10px 5px" }}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </Typography>
            <Box className="searchbox" sx={{margin:'50px 0px'}}>
              <input placeholder="Search...." />
              <IconButton
                sx={{
                  borderRadius: "50%",
                  padding: "10px",
                  bgcolor: "darkblue",
                  margin: "0px 10px",
                }}
                disableRipple
              >
                <SearchIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <img src="Group 163206.png" className="img" />
          </Grid>
        </Grid>
      </Box>
      <img src="line.png" className="line" />
      <img src="line.png" className="line" />
    </div>
  );
}