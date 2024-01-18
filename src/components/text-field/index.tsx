import { Box, TextField } from "@mui/material";
import "./style.css";

const InputField = ({ label, required, name, value, handleChange }) => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <input
        name={name}
        value={value}
        onChange={(event) =>
          handleChange(event.target.name, event.target.value)
        }
        className="input-field"
        placeholder={`${label}${required ? "*" : ""}`}
      />
    </Box>
  );
};

export default InputField;
