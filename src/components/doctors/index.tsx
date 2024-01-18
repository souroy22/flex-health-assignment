import { Box, Chip } from "@mui/material";
import { useState } from "react";

const DoctsAppointment = ({ selectedDoctor, setSelectedDoctor }) => {
  const data = [
    { name: "Dr. Anubabh Saha" },
    { name: "Dr. Biplab Das" },
    { name: "Dr. Abhishek Gain" },
    { name: "Dr. Hansraj Hati" },
  ];
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {data.map((doctr) => (
        <Chip
          label={doctr.name}
          sx={{
            backgroundColor: selectedDoctor === doctr.name ? "navy" : "orange",
            color: "white",
            cursor: "pointer",
          }}
          onClick={() =>
            doctr.name === selectedDoctor
              ? setSelectedDoctor("")
              : setSelectedDoctor(doctr.name)
          }
        />
      ))}
    </Box>
  );
};

export default DoctsAppointment;
