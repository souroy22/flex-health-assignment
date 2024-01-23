import { Box, Chip } from "@mui/material";

type PropsType = {
  selectedDoctor: string;
  setSelectedDoctor: (name: string) => void;
};

const DoctsAppointment = ({ selectedDoctor, setSelectedDoctor }: PropsType) => {
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
