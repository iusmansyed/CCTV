import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Step1 from "../Components/Forms/Step1";
import Step2 from "../Components/Forms/Step2";
import Step3 from "../Components/Forms/Step3";
import AD1 from "../Components/AlarmDomestic/Step1";
import AC1 from "../Components/AlarmCommercial/Step1";
import CC1 from "../Components/CCTVCommercial/Step1";
import CD1 from "../Components/CCTVdomestic/CCTV1";
import CD2 from "../Components/CCTVdomestic/CCTV2";
import Sidebar from "../Components/SideBar/Sidebar";

const defaultSteps = [Step1, Step2, Step3];
const CCTVDomestic = [CD1, CD2];
const CCTVCommercial = [CC1];
const AlarmDomestic = [AD1];
const AlarmCommercial = [AC1];

const Home = () => {
  const [steps, setSteps] = useState([]); // Initialize with default steps
  const [currentStep, setCurrentStep] = useState(0); // Step index starts from 0
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    postal: "",
    address: "",
    service: "",
    sector: "",
  });
  const [CCtvD, setCCtvD] = useState({
    postal: "",
    house: "",
  });
  // Effect to update steps based on formData changes
  useEffect(() => {
    if (!formData.sector && !formData.service) {
      setSteps(defaultSteps);
    }
    console.log("formData.service:", formData); // Debugging log
    console.log("formData.sector:", formData.sector); // Debugging log
    if (formData.service === "CCTV" && formData.sector === "Domestic") {
      setSteps(CCTVDomestic);
      setCurrentStep(0)
      // console.log("CCTVDomestic =====>", CCTVDomestic);
    } else if (
      formData.service === "CCTV" &&
      formData.sector === "Commercial"
    ) {
      setSteps(CCTVCommercial);
      setCurrentStep(0)
    } else if (formData.service === "Alarm" && formData.sector === "Domestic") {
      setSteps(AlarmDomestic);
      setCurrentStep(0)
    } else if (
      formData.service === "Alarm" &&
      formData.sector === "Commercial"
    ) {
      setSteps(AlarmCommercial);
      setCurrentStep(0)
    }
  }, [formData.service, formData.sector, steps]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setCCtvD((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  // useEffect(() => {
    
  //   return () => {
      
  //   };
  // }, []);
  const nextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const StepComponent = steps[currentStep]; // Get the component based on the index
  return (
    <>
      <Sidebar />
      <div className={styles.main}>
        <div>
          {StepComponent && (
            <StepComponent formData={formData} handleChange={handleChange} />
          )}
          <div className={styles.btn}>
            {currentStep > 0 && <button onClick={prevStep}>Previous</button>}
            {currentStep < steps.length - 1 ? (
              <button onClick={nextStep}>Next step</button>
            ) : (
              <button type="submit">Submit</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
