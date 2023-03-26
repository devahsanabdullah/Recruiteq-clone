import React from "react";
import {
  Typography,
  Grid,
  Box,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  IconButton,
} from "@mui/material";
import "./FilterJob.css";
import SearchIcon from "@mui/icons-material/Search";
import { filterJobContainer, ContainerImage } from "../Style";

export default function FilterJob() {
  let labels = ["Category", "Role", "Job Type", "Location"];
  return (
    <div>
      <Grid container sx={filterJobContainer}>
        <img alt="img" style={ContainerImage} src="Vector 1580.png" />

        <Grid item xs={12} md={12}>
          <Typography
            variant="h3"
            sx={{ fontSize: { md: "45px", xs: "25px" } }}
          >
            Filter Your Required Job
          </Typography>
          <Typography sx={{ wordSpacing: "3px" }}>
            Hurry up find the specific job accordingly your requirements and
            apply.
          </Typography>
        </Grid>
        <Grid
          item
          md={12}
          xs={12}
          sx={{
            display: { md: "flex", xs: "block" },
            justifyContent: "center",
            padding: "50px",
          }}
        >
          <Box
            sx={{
              display: { md: "flex", xs: "block" },
            }}
            className="parentBox"
          >
            {labels.map((m) => {
              return (
                <>
                  <Box
                    sx={{
                      width: { md: "140px", xs: "80%" },
                      margin: "0px auto",
                    }}
                  >
                    <FormControl variant="standard" fullWidth>
                      <InputLabel id="demo-simple-select-label">{m}</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value="age"
                        label="Age"
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </>
              );
            })}
          </Box>
          <Box
            sx={{
              width: { md: "auto", xs: "80%" },
              margin: { md: "0px 10px", xs: "10px auto" },
            }}
          >
            <IconButton
              disableRipple
              sx={{ padding: "20px 20px", borderRadius: "25px", backgroundColor: "#2149A2",}}
            >
              <SearchIcon />
              Search Job
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
