import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box } from "@mui/material";
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
  handleChange: (name: string, value: string) => void;
};

const SearchAbleInput = ({
  cities,
  name,
  value,
  handleChange,
  label,
  required,
}: PropsType) => {
  const getData: getCityValue = (value) => {
    let city = { label: "", id: 100 };
    if (!value || !value.trim()) {
      return city;
    }
    for (let item of cities) {
      if (item.label === value) {
        city = item;
        break;
      }
    }
    if (!city.label.trim()) {
      city.label = value;
    }
    return city;
  };

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
        onChange={(_, option) => handleChange(name, option?.label || "")}
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
              handleChange(event.target.name, event.target.value)
            }
          />
        )}
      />
    </Box>
  );
};

export default SearchAbleInput;
