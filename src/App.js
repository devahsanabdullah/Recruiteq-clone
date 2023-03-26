import React from "react";
import LookingForJob from "./components/LookingForJob/lookingForJob";
import { ThemeProvider } from "@mui/system";
import { Box } from "@mui/material";
import Howto from "./components/How to Use/Howto.js";
import theme from "./theme/theme";
import "./App.css";
import FilterJob from "./components/FilterJob/FilterJob";
import Rec from "./components/recruite/Rec";
import JobDetails from "./components/job details/JobDetails";
import NewsLatter from "./components/NewsLatter/NewsLatter";
import Footer from './components/Footer/Footer.js'
import Header from "./components/Header/Header";
export default function App() {
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "100%", lg: "100%", xl: "1280px" },
        margin: "0px auto",
      }}
    >
      <ThemeProvider theme={theme}>
        <Header />
        <LookingForJob />
        <FilterJob />
        <Howto />
        <Rec />
        <JobDetails />
        <NewsLatter />
        <Footer />
      </ThemeProvider>
    </Box>
  );
}
