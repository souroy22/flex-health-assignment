import { Box, Chip } from "@mui/material";
import "./style.css";

type doctor = {
  name: string;
  slot: string;
  city: string;
  expertise: string;
  id: string;
};

type DoctorPropType = {
  doctorData: doctor;
};

type PropsType = {
  selectedDoctor: string;
  setSelectedDoctor: (name: string) => void;
  doctorsData: doctor[];
};

export const ChipLabel = ({ doctorData }: DoctorPropType) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
        flexWrap: "wrap",
        textAlign: "center",
        alignItems: "center",
        gap: "5px",
      }}
    >
      <Box>{doctorData.name}</Box>
      <Box>{doctorData.slot}</Box>
      <Box
        sx={{
          backgroundColor: "#21ea8d",
          color: "#19072e",
          fontWeight: 600,
          padding: "3px",
          borderRadius: "5px",
        }}
      >
        {doctorData.expertise}
      </Box>
    </Box>
  );
};

const DoctsAppointment = ({
  selectedDoctor,
  setSelectedDoctor,
  doctorsData,
}: PropsType) => {
  return (
    <Box className="doctors-appointment-section">
      {doctorsData.map((doctr) => (
        <Chip
          label={<ChipLabel doctorData={doctr} />}
          sx={{
            height: "auto",
            padding: "5px",
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
