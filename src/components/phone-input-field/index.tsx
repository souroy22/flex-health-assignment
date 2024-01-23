import { Box } from "@mui/material";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

type PropType = {
  handleChange: (argType: string, phoneNumber: string) => void;
  label: string;
};

type OnChangeFnType = (phoneNumber: string) => void;

const PhoneInputField = ({ handleChange, label }: PropType) => {
  const [value, setValue] = useState("");

  const onChange: OnChangeFnType = (phone) => {
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
