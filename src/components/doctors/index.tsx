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
  isLoading,
}: PropsType) => {
  return (
    <Box className="doctors-appointment-section">
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            height: "100px",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress sx={{ color: "whitesmoke" }} />
        </Box>
      ) : !doctorsData.length ? (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            margin: "0 auto",
          }}
        >
          <SentimentDissatisfiedIcon
            sx={{
              fontSize: "6rem !important",
              color: "#dc7373",
            }}
          />
          <span style={{ color: "white", fontWeight: 600 }}>
            Sorry we donot have service for your city
          </span>
        </Box>
      ) : (
        doctorsData.map((doctr) => (
          <Chip
            key={doctr.id}
            label={<ChipLabel doctorData={doctr} />}
            sx={{
              height: "auto",
              padding: "5px",
              backgroundColor:
                selectedDoctor === doctr.name ? "navy" : "orange",
              color: "white",
              cursor: "pointer",
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
