import { Box, Button } from "@mui/material";
import "./style.css";
import InputField from "../text-field";
import PhoneInputField from "../phone-input-field";
import CustomizedSteppers from "../stepper";
import { useEffect, useState } from "react";
import DoctsAppointment from "../doctors";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
  "Create an ad",
];

const StepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const [isValid, setIsValid] = useState(true);

  const [fakeUpdate, setFakeUpdate] = useState(false);

  const getParamsValue = (param: string) => {
    let params = new URLSearchParams(document.location.search);
    return params.get(param) || null;
  };

  const [data, setData] = useState<any>({
    "Step 0": { fullName: "", phoneNumber: "" },
    "Step 1": { age: "", city: "", company: "" },
    "Step 2": { complaints: "" },
    "Step 3": { previousExperience: "" },
  });

  const handleChange = (name: string, value: string) => {
    const newData = { ...data[`Step ${currentStep}`], [name]: value };
    data[`Step ${currentStep}`] = newData;
    let check = false;
    const obj: any = data[`Step ${currentStep}`];
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
    <Box className="step-form-section">
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
      <Box className="form-container">
        {currentStep === 0 && (
          <InputField
            name="fullName"
            value={data[`Step 0`].fullName}
            label="Full Name"
            required={true}
            handleChange={handleChange}
          />
        )}
        {currentStep === 0 && (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <PhoneInputField handleChange={handleChange} label="Phone Number" />
          </Box>
        )}
        {currentStep === 1 && (
          <InputField
            name="age"
            label="age"
            required={true}
            value={data["Step 1"].age}
            handleChange={handleChange}
          />
        )}
        {currentStep === 1 && (
          <InputField
            name="city"
            label="City"
            required={true}
            value={data["Step 1"].city}
            handleChange={handleChange}
          />
        )}
        {currentStep === 1 && (
          <InputField
            name="company"
            label="Company"
            required={true}
            value={data["Step 1"].company}
            handleChange={handleChange}
          />
        )}
        {currentStep === 2 && (
          <InputField
            name="complaints"
            label="Enter your Complaints"
            required={true}
            value={data["Step 2"].complaints}
            handleChange={handleChange}
          />
        )}
        {currentStep === 3 && (
          <InputField
            name="previousExperience"
            label="Any previous experience with physiotherapy"
            required={true}
            value={data["Step 3"].previousExperience}
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
            currentStep <= steps.length && setCurrentStep(currentStep + 1);
            setIsValid(true);
          }}
        >
          {currentStep === steps.length ? "Book Appoinment" : "Continue"}
        </Button>
      </Box>
    </Box>
  );
};

export default StepForm;
