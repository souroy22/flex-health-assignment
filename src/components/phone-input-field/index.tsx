import { Box } from "@mui/material";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneInputField = ({ handleChange, label }) => {
  const [value, setValue] = useState("");

  const onChange = (phone) => {
    setValue(phone);
    handleChange && handleChange("phoneNumber", phone);
  };

  return (
    <Box>
      <PhoneInput
        country={"in"}
        value={value}
        onChange={(phone) => onChange(phone)}
        placeholder={label}
      />
    </Box>
  );
};

export default PhoneInputField;
