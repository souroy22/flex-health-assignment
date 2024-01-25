import { Box, Chip, CircularProgress } from "@mui/material";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
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
  isLoading: boolean;
};

export const ChipLabel = ({ doctorData }: DoctorPropType) => {
  return (
    <Box className="doctor-container">
      <Box>{doctorData.name}</Box>
      <Box>{doctorData.slot}</Box>
      <Box className="doctor-expertise">{doctorData.expertise}</Box>
    </Box>
  );
};

const DoctsAppointment = ({
  selectedDoctor,
  setSelectedDoctor,
  doctorsData,
  isLoading,
}: PropsType) => {
  return (
    <Box className="doctors-appointment-section">
      {isLoading ? (
        <Box className="loader-section">
          <CircularProgress sx={{ color: "whitesmoke" }} />
        </Box>
      ) : !doctorsData.length ? (
        <Box className="no-doctor-section">
          <SentimentDissatisfiedIcon
            sx={{
              fontSize: "6rem !important",
              color: "#dc7373",
            }}
          />
          <span className="no-doctor-text">
            Sorry we donot have service for your city
          </span>
        </Box>
      ) : (
        doctorsData.map((doctr) => (
          <Chip
            key={doctr.id}
            className="chip-container"
            label={<ChipLabel doctorData={doctr} />}
            sx={{
              backgroundColor:
                selectedDoctor === doctr.name ? "navy" : "orange",
            }}
            onClick={() =>
              doctr.name === selectedDoctor
                ? setSelectedDoctor("")
                : setSelectedDoctor(doctr.name)
            }
          />
        ))
      )}
    </Box>
  );
};

export default DoctsAppointment;
