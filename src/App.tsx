import { useState } from "react";
import "./App.css";
import { Box } from "@mui/material";
import HeroSection from "./components/hero-section";
import Navbar from "./components/navbar";
import StepForm from "./components/step-form";
import Testimonials from "./components/testimonials";

const App = () => {
  return (
    <Box>
      <Navbar />
      <HeroSection />
      <Box className="step-form">
        <StepForm />
      </Box>
      <Box
        sx={{
          background: "#191919",
          // background: "linear-gradient(120deg, #191919, #9198e5)",
          // "linear-gradient(90deg, #38031c -0.59%, #13010a 46.85%,#16010b 100%)",
        }}
      >
        <Testimonials />
      </Box>
    </Box>
  );
};

export default App;
