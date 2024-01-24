import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box } from "@mui/material";

type CityType = {
  label: string;
  id: number;
};

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
  console.log("Value ----> ", value);

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
        onChange={(_, option) => handleChange(name, option?.label || "")}
        sx={{ width: "83%", "& .MuiAutocomplete-inputRoot": { paddingTop: 0 } }}
        renderInput={(params) => (
          <TextField
            sx={{
              input: {
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
