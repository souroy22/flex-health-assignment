import { Box, Button } from "@mui/material";
import "./style.css";

const Navbar = () => {
  return (
    <Box className="navbar-section">
      <Box className="navbar-left">Logo</Box>
      <Box className="navbar-right">
        <Box>
          <a href="#">Home</a>
        </Box>
        <Box>
          <a href="#reviews">About</a>
        </Box>
        <Button
          variant="contained"
          onClick={() => document.getElementById("fullName")?.focus()}
          sx={{
            backgroundColor: "#351F39",
            "&:hover": { backgroundColor: "#351F39" },
          }}
        >
          Book Now
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
