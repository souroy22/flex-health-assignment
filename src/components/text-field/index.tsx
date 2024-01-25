import { Box } from "@mui/material";
import "./style.css";

type PropsType = {
  label: String;
  required: boolean;
  name: string;
  value: string;
  handleChange: (name: string, value: string) => void;
  id?: string;
  type?: string;
};

const InputField = ({
  label,
  required,
  name,
  type,
  value,
  handleChange,
  id,
}: PropsType) => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <input
        type={type ? type : "text"}
        name={name}
        value={value}
        id={id}
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
