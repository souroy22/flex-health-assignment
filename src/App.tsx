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
        }}
      >
        <Testimonials />
      </Box>
    </Box>
  );
};

export default App;
