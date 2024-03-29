import { Box, Button } from "@mui/material";
import "./style.css";

type BookNowFn = () => void;

const Navbar = () => {
  const bookNow: BookNowFn = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    const formContainer: HTMLElement | null =
      document.getElementById("step-form-section");
    if (formContainer) {
      formContainer.style.transition = "all 0.4s ease-in-out";
      formContainer.animate(
        [{ transform: "scale(1)" }, { transform: "scale(1.2)" }],
        {
          duration: 1000,
          iterations: 1,
          direction: "reverse",
        }
      );
    }
    document.getElementById("fullName")?.focus();
  };

  return (
    <Box className="navbar-section">
      <Box className="navbar-left">
        <img
          src="/vite.jpg"
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box className="navbar-right">
        <Box>
          <a href="#">Home</a>
        </Box>
        <Box>
          <a href="#reviews">About</a>
        </Box>
        <Button
          variant="contained"
          onClick={bookNow}
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
