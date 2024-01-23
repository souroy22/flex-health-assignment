import { Box, Button } from "@mui/material";
import "./style.css";
import InputField from "../text-field";
import PhoneInputField from "../phone-input-field";
import CustomizedSteppers from "../stepper";
import { useEffect, useState } from "react";
import DoctsAppointment from "../doctors";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
  "Create an ad",
];

type GetParamsValueFnType = (param: string) => string | null;

type Step0Type = {
  fullName: string;
  phoneNumber: string;
};

type Step1Type = {
  age: string;
  city: string;
  company: string;
};
type Step2Type = {
  complaints: string;
};
type Step3Type = {
  previousExperience: string;
};

// type DataType = {
//   "Step 0": Step0Type;
//   "Step 1": Step1Type;
//   "Step 2": Step2Type;
//   "Step 3": Step3Type;
// };

type NewDataType = Step0Type | Step1Type | Step2Type | Step3Type;

type DataType = {
  [key: string]: NewDataType;
};

const StepForm = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedDoctor, setSelectedDoctor] = useState<string>("");

  const [isValid, setIsValid] = useState<boolean>(true);

  const [fakeUpdate, setFakeUpdate] = useState<boolean>(false);

  const [successSubmitData, setSuccessSubmitData] = useState<boolean>(false);

  const getParamsValue: GetParamsValueFnType = (param) => {
    let params = new URLSearchParams(document.location.search);
    return params.get(param) || null;
  };

  const [data, setData] = useState<DataType>({
    "Step 0": { fullName: "", phoneNumber: "" },
    "Step 1": { age: "", city: "", company: "" },
    "Step 2": { complaints: "" },
    "Step 3": { previousExperience: "" },
  });

  const handleChange = (name: string, value: string) => {
    const newData: NewDataType = {
      ...(data[`Step ${currentStep}`] as NewDataType),
      [name]: value,
    };
    data[`Step ${currentStep}`] = newData;
    let check: boolean = false;
    const obj: NewDataType = data[`Step ${currentStep}`];
    for (const [key, val] of Object.entries(obj)) {
      if (key === "phoneNumber") {
        check = val.length !== 12;
      } else if (key === "age") {
        if (!Number(val)) {
          check = true;
        } else if (Number(val) < 0) {
          check = true;
        }
      } else if (!val.trim()) {
        check = true;
      }
      if (check) {
        break;
      }
    }
    setData(() => data);
    setIsValid(check);
    setFakeUpdate(!fakeUpdate);
  };

  useEffect(() => {
    const val = getParamsValue("city");
    if (val !== null) {
      const newData = { ...data["Step 1"], ["city"]: val };
      data["Step 1"] = newData;
      setData(data);
      setFakeUpdate(!fakeUpdate);
    }
  }, []);

  return (
    <Box className="step-form-section" id="step-form-section">
      {successSubmitData ? (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <CheckCircleIcon sx={{ color: "#3eff3e", fontSize: "3em" }} />
          <h4 style={{ color: "gray", display: "block" }}>Appointment</h4>
          <h2 style={{ color: "white" }}>Booked Successfully!</h2>
          <Button
            variant="contained"
            onClick={() => {
              setSuccessSubmitData(false);
              setData({
                "Step 0": { fullName: "", phoneNumber: "" },
                "Step 1": { age: "", city: "", company: "" },
                "Step 2": { complaints: "" },
                "Step 3": { previousExperience: "" },
              });
              setCurrentStep(0);
            }}
          >
            Create a new Booking
          </Button>
        </Box>
      ) : (
        <>
          {currentStep === 0 && (
            <Box className="form-heading">Book an Appointment for FREE</Box>
          )}
          {currentStep === 0 && (
            <Box className="form-about">
              60+ Expert Physiotherapists for 200+ Conditions
            </Box>
          )}
          {currentStep > 0 && (
            <Box>
              <CustomizedSteppers steps={steps} activeStep={currentStep} />
            </Box>
          )}
        </>
      )}

      {!successSubmitData && (
        <Box className="form-container">
          {successSubmitData ? (
            <></>
          ) : (
            <>
              {currentStep === 0 && (
                <InputField
                  name="fullName"
                  value={(data["Step 0"] as Step0Type).fullName}
                  label="Full Name"
                  required={true}
                  handleChange={handleChange}
                  id="fullName"
                />
              )}
              {currentStep === 0 && (
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <PhoneInputField
                    handleChange={handleChange}
                    label="Phone Number"
                  />
                </Box>
              )}
              {currentStep === 1 && (
                <InputField
                  name="age"
                  label="age"
                  required={true}
                  value={(data["Step 1"] as Step1Type).age}
                  handleChange={handleChange}
                />
              )}
              {currentStep === 1 && (
                <InputField
                  name="city"
                  label="City"
                  required={true}
                  value={(data["Step 1"] as Step1Type).city}
                  handleChange={handleChange}
                />
              )}
              {currentStep === 1 && (
                <InputField
                  name="company"
                  label="Company"
                  required={true}
                  value={(data["Step 1"] as Step1Type).company}
                  handleChange={handleChange}
                />
              )}
              {currentStep === 2 && (
                <InputField
                  name="complaints"
                  label="Enter your Complaints"
                  required={true}
                  value={(data["Step 2"] as Step2Type).complaints}
                  handleChange={handleChange}
                />
              )}
              {currentStep === 3 && (data["Step 1"] as Step1Type).age && (
                <InputField
                  name="previousExperience"
                  label="Any previous experience with physiotherapy"
                  required={true}
                  value={(data["Step 3"] as Step3Type).previousExperience}
                  handleChange={handleChange}
                />
              )}
              {currentStep === 4 && (
                <DoctsAppointment
                  selectedDoctor={selectedDoctor}
                  setSelectedDoctor={setSelectedDoctor}
                />
              )}
              <Button
                variant="contained"
                disabled={currentStep === 4 ? !selectedDoctor.trim() : isValid}
                sx={{
                  minWidth: "100px",
                  margin: "0 auto",
                  marginTop: "10px",
                  backgroundImage:
                    "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
                }}
                onClick={() => {
                  if (currentStep < steps.length) {
                    if (
                      currentStep === 1 &&
                      Number((data["Step 1"] as Step1Type).age) < 40
                    ) {
                      setCurrentStep(currentStep + 2);
                    } else {
                      setCurrentStep(currentStep + 1);
                    }
                    setIsValid(true);
                  } else {
                    setSuccessSubmitData(true);
                  }
                }}
              >
                {currentStep === steps.length ? "Book Appoinment" : "Continue"}
              </Button>
            </>
          )}
        </Box>
      )}
    </Box>
  );
};

export default StepForm;
