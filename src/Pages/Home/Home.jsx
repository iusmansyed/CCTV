import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Step1 from "../../Components/Forms/Step1";
import Step2 from "../../Components/Forms/Step2";
import Step3 from "../../Components/Forms/Step3";
import AD1 from "../../Components/AlarmDomestic/Step1";
import AC1 from "../../Components/AlarmCommercial/Step1";
import CC1 from "../../Components/CCTVCommercial/Step1";
import CD1 from "../../Components/CCTVdomestic/CCTV1";
import CD2 from "../../Components/CCTVdomestic/CCTV2";
import CD3 from "../../Components/CCTVdomestic/CCTV3";
import CD4 from "../../Components/CCTVdomestic/CCTV4";
import CD5 from "../../Components/CCTVdomestic/CCTV5";
import CD6 from "../../Components/CCTVdomestic/CCTV6";
import CD7 from "../../Components/CCTVdomestic/CCTV7";
import CD8 from "../../Components/CCTVdomestic/CCTV8";
import { setCurrentStep, setPreferredCamera } from "../../Redux/action"
import Sidebar from "../../Components/SideBar/Sidebar";

import Sliders from "../Sliders/Sliders";
import { useDispatch, useSelector } from "react-redux";

// const defaultSteps = [Step1, Step2, Step3];
const defaultSteps = [CD5, CD6, Sliders,CD7,CD8];
const CCTVDomestic = [CD1, CD2, CD3, CD4, CD5, CD6, Sliders,];
const CCTVCommercial = [CC1];
const AlarmDomestic = [AD1];
const AlarmCommercial = [AC1];

const Home = () => {
  const dispatch = useDispatch()
  const { currentStep } = useSelector(state => state.currentStep)
  const [state, setState] = useState("");
  const [steps, setSteps] = useState([]); // Initialize with default steps
  // const [currentStep, setCurrentStep] = useState(0); // Step index starts from 0
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
    size: "",
    numberOfFloor: "",
    numberOfEntry: "",
    purpose: "",
    specificArea: "",
    RecentSecurity: "",
    CameraLocation: "",
    heightInstall: "",
    cameraMounting: "",
    capturedImage: "",
    PreferredCamera: "",
    Resolution: "",
    nightVision:"",
    motionDetection:"",
    audioRecording:"",
    RemoteAccessRequired:"",
    PowerSourceAvailability:"",
    PowerSourceAvailability:"",
    DVR:"",
    RouterLocation:"",
    visible:"",
    Concealed:"",
    Wireless:"",
    Installed:"",
    WirelessInter:""
  });
  console.log(formData.nightVision);
  const {PreferredCamera:preferredCamera} = useSelector((state) => state.setData);
  
  // dispatch(setPreferredCamera(CCtvD.PreferredCamera));

  // Effect to update steps based on formData changes
  useEffect(() => {
    if (!formData.sector && !formData.service) {
      setSteps(defaultSteps);
    }
    if (formData.service === "CCTV" && formData.sector === "Domestic") {
      setSteps(CCTVDomestic);
      setState("cctvd");
      dispatch(setCurrentStep(0))
    } else if (
      formData.service === "CCTV" &&
      formData.sector === "Commercial"
    ) {
      setSteps(CCTVCommercial);
      dispatch(setCurrentStep(0))
    } else if (formData.service === "Alarm" && formData.sector === "Domestic") {
      setSteps(AlarmDomestic);
      dispatch(setCurrentStep(0))
    } else if (
      formData.service === "Alarm" &&
      formData.sector === "Commercial"
    ) {
      setSteps(AlarmCommercial);
      dispatch(setCurrentStep(0))
    }
  }, [formData.service, formData.sector, steps, dispatch, setCurrentStep]);

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

  const nextStep = () => {
    dispatch(setCurrentStep(Math.min(currentStep + 1, steps.length - 1)))
  };

  const prevStep = () => {
    dispatch(setCurrentStep(Math.max(currentStep - 1, 0)));
  };
  const StepComponent = steps[currentStep];

  // Get the component based on the index
  const i = localStorage.getItem("btn")
  return (
    <>
      {currentStep === 2 ? null :
        <Sidebar />
      }
      <div className={currentStep === 2 ? "" : styles.main}>
        <div>
          {StepComponent && (
            <StepComponent
              formData={state === "cctvd" ? CCtvD : formData}
              setVal={setCCtvD}
              handleChange={state === "cctvd" ? handleChange2 : handleChange}
              next={nextStep}
            />
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
