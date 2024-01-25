import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box } from "@mui/material";
import "./style.css";
import { useEffect } from "react";

type CityType = {
  label: string;
  id: number;
};

type getCityValue = (value: string) => CityType;

type PropsType = {
  cities: CityType[];
  name: string;
  value: string;
  label: string;
  required: boolean;
  handleChange: (name: string, value: string, isValid: boolean) => void;
  validCity: boolean;
  setValidCity: (isValid: boolean) => void;
};

const SearchAbleInput = ({
  cities,
  name,
  value,
  handleChange,
  label,
  required,
  validCity,
  setValidCity,
}: PropsType) => {
  const getData: getCityValue = (value) => {
    let city = { label: "", id: 100 };
    if (!value || !value.trim()) {
      return city;
    }
    for (let item of cities) {
      if (item.label.toLowerCase() === value.toLowerCase()) {
        city = item;
        break;
      }
    }
    if (!city.label.trim()) {
      city.label = value;
    }
    return city;
  };

  const isValidCity = (value: string) => {
    for (let item of cities) {
      if (item.label.toLowerCase() === value.toLowerCase()) {
        return true;
      }
    }
    return false;
  };

  const onChange = (name: string, option: string) => {
    const check: boolean = !isValidCity(option || "");
    setValidCity(check);
    handleChange(name, option || "", !check);
  };

  useEffect(() => {
    value.trim() && setValidCity(!isValidCity(value));
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={cities}
        value={getData(value)}
        onChange={(_, option) => onChange(name, option?.label || "")}
        sx={{ width: "83%", "& .MuiAutocomplete-inputRoot": { paddingTop: 0 } }}
        renderInput={(params) => (
          <TextField
            sx={{
              input: {
                opacity: 1,
                "&::placeholder": {
                  color: "#8e8e8e",
                  opacity: 1,
                },
              },
              "& .MuiInputBase-root": {
                backgroundColor: "white",
                opacity: 1,
                "& .focus": {
                  backgroundColor: "white",
                  opacity: 1,
                },
                "&:hover": {
                  backgroundColor: "white",
                  opacity: 1,
                },
              },
            }}
            {...params}
            variant="filled"
            required={required}
            placeholder={`${label}${required ? "*" : ""}`}
            name={name}
            value={value}
            onChange={(event) =>
              onChange(event.target.name, event.target.value)
            }
          />
        )}
      />
      {validCity && (
        <span className="error-message">Please select a valid city</span>
      )}
    </Box>
  );
};

export default SearchAbleInput;
