import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Step1 from "../../Components/Forms/Step1";
import Step2 from "../../Components/Forms/Step2";
import Step3 from "../../Components/Forms/Step3";
import AD1 from "../../Components/AlarmDomestic/AlarmD1";
import AD2 from "../../Components/AlarmDomestic/AlarmD2";
import AD3 from "../../Components/AlarmDomestic/AlarmD3";
import AD4 from "../../Components/AlarmDomestic/AlarmD4";
import AD5 from "../../Components/AlarmDomestic/AlarmD5";
import AC1 from "../../Components/AlarmCommercial/AlarmC1";
import AC2 from "../../Components/AlarmCommercial/AlarmC2";
import AC3 from "../../Components/AlarmCommercial/AlarmC3";
import AC4 from "../../Components/AlarmCommercial/AlarmC4";
import AC5 from "../../Components/AlarmCommercial/AlarmC5";
import CC1 from "../../Components/CCTVCommercial/CCTVC1";
import CC2 from "../../Components/CCTVCommercial/CCTVC2";
import CC3 from "../../Components/CCTVCommercial/CCTVC3";
import CC4 from "../../Components/CCTVCommercial/CCTVC4";
import CC5 from "../../Components/CCTVCommercial/CCTVC5";
import CC6 from "../../Components/CCTVCommercial/CCTVC6";
import CC7 from "../../Components/CCTVCommercial/CCTVC7";
import CC8 from "../../Components/CCTVCommercial/CCTVC8";
import CC9 from "../../Components/CCTVCommercial/CCTVC9";
import CC10 from "../../Components/CCTVCommercial/CCTVC10";
import CC11 from "../../Components/CCTVCommercial/CCTVC11";
import CD1 from "../../Components/CCTVdomestic/CCTV1";
import CD2 from "../../Components/CCTVdomestic/CCTV2";
import CD3 from "../../Components/CCTVdomestic/CCTV3";
import CD4 from "../../Components/CCTVdomestic/CCTV4";
import CD5 from "../../Components/CCTVdomestic/CCTV5";
import CD6 from "../../Components/CCTVdomestic/CCTV6";
import CD7 from "../../Components/CCTVdomestic/CCTV7";
import CD8 from "../../Components/CCTVdomestic/CCTV8";
import CD9 from "../../Components/CCTVdomestic/CCTV9";
import CD10 from "../../Components/CCTVdomestic/CCTV10";
import CD11 from "../../Components/CCTVdomestic/CCTV11";
import { allValue, SET_ALL_VALUE, setCurrentStep, setPreferredCamera } from "../../Redux/action"
import Sidebar from "../../Components/SideBar/Sidebar";
import ThankYou from "../../Pages/ThankYou/ThankYou";

import Sliders from "../Sliders/Sliders";
import { useDispatch, useSelector } from "react-redux";
import Topbar from "../../Components/topBar/Topbar";

const defaultSteps = [Step1, Step2, Step3];
// const defaultSteps = [AC1, AC2, AC3, AC4, AC5];
const CCTVDomestic = [CD1, CD2, CD3, CD4, CD5, CD6, Sliders, CD7, CD8, CD9, CD10, CD11, ThankYou];
const CCTVCommercial = [CC1, CC2, CC3, CC4, CC5, CC6, Sliders, CC7, CC8, CC9, CC10, CC11, ThankYou];
const AlarmDomestic = [AD1, AD2, AD3, AD4, AD5];
const AlarmCommercial = [AC1, AC2, AC3, AC4, AC5];

const Home = () => {
  const dispatch = useDispatch()
  const { currentStep } = useSelector(state => state.currentStep)
  const [state, setState] = useState("");
  const [sideState, setSideState] = useState(false);
  console.log(sideState,"side state >>>>>>>>");
  
  const [sideState1, setSideState1] = useState(false);
  const [sideState2, setSideState2] = useState(false);
  const [sideState3, setSideState3] = useState(false);
  const [sideState4, setSideState4] = useState(false);
  const [sideState5, setSideState5] = useState(false);
  const [steps, setSteps] = useState([]); // Initialize with default steps
  useEffect(() => {
    if (state === "cctvd" || state === "cctvc") {
      if (formData.fullName != "" || formData.email != "" || formData.address != "" || formData.postal != "" || formData.sector != "" || formData.service != "" ) {
        setSideState(true)
      }
      if (currentStep === 3) {
        setSideState1(true)
      }
      if (currentStep === 5) {
        setSideState2(true)
      }
      if (currentStep === 7) {
        setSideState3(true)
      }
      if (currentStep === 9) {
        setSideState4(true)
      }
      if (currentStep === 12) {
        setSideState4(true)
      }
      if (currentStep === 13) {
        setSideState5(true)
      }
    }else if (state === "alarmD" ||  state === "alarmC") {
      if (formData.fullName || formData.email || formData.address || formData.postal) {
        setSideState(true)
      } if (currentStep === 1) {
        setSideState1(true)
      }
      if (currentStep === 2) {
        setSideState2(true)
      }
      if (currentStep === 3) {
        setSideState3(true)
      }
      if (currentStep === 4) {
        setSideState4(true)
      }
      if (currentStep === 5) {
        setSideState5(true)
      }
    }

  }, [currentStep])

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    postal: "",
    address: "",
    service: "",
    sector: "",
  });
console.log(formData);

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
    nightVision: "",
    storage: "",
    motionDetection: "",
    audioRecording: "",
    RemoteAccessRequired: "",
    PowerSourceAvailability: "",
    PowerSourceAvailability: "",
    DVR: "",
    RouterLocation: "",
    visible: "",
    Concealed: "",
    Wireless: "",
    Installed: "",
    WirelessInter: "",
    AccessInstall: "",
    currentSecuritySystem: "",
    date: "",
    privacy: "",
    specificBrand: "",
    suggested: "",
    SecurityLighting: "",
    fireAlarm: "",
    SmartLocks: "",
    system: "",
    AdditionalSecurity: "",
    Email: "",
    Phone: "",
    SMS: "",
    InstallationDesc: "",
    anyExisting: ""
  });
  const [CCtvC, setCCtvC] = useState({
    selectSector: "",
    size: "",
    purpose: "",
    specificArea: "",
    RecentSecurity: "",
    CameraLocation: "",
    heightInstall: "",
    capturedImage: "",
    cameraMounting: "",
    InstallationDesc: "",
    PreferredCamera: "",
    Resolution: "",
    storage: "",
    nightVision: "",
    motionDetection: "",
    audioRecording: "",
    RemoteAccessRequired: "",
    PowerSourceAvailability: "",
    DVR: "",
    RouterLocation: "",
    visible: "",
    Concealed: "",
    Wireless: "",
    Installed: "",
    WirelessInter: "",
    date: "",
    privacy: "",
    specificBrand: "",
    suggested: "",
    SecurityLighting: "",
    fireAlarm: "",
    SmartLocks: "",
    system: "",
    heightInstall: "",
    Email: "",
    Phone: "",
    SMS: "",
  });
  const [alarmD, setAlarmD] = useState({
    house: "",
    size: "",
    numberOfFloor: "",
    numberOfEntry: "",
    ControlLocation: "",
    localPower: "",
    DescriptionConnection: "",
    description: "",
    approxDistance: "",
    Sensors: "",
    Doorcontacts: "",
    moreDescription: ""

  })
  const [alarmC, setAlarmC] = useState({
    selectSector: "",
    wired: "",
    Wireless: "",
    size: "",
    numberOfFloor: "",
    numberOfEntry: "",
    Sensors: "",
    Doorcontacts: "",
    localPower: "",
    DescriptionConnection: "",
  })
  console.log(alarmC, "jsadhksa");

  useEffect(() => {
    dispatch({ type: SET_ALL_VALUE, payload: formData });
  }, [formData])

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
      setState("cctvc");
      dispatch(setCurrentStep(0))
    } else if (formData.service === "Alarm" && formData.sector === "Domestic") {
      setSteps(AlarmDomestic);
      setState("alarmD");

      dispatch(setCurrentStep(0))
    } else if (
      formData.service === "Alarm" &&
      formData.sector === "Commercial"
    ) {
      setSteps(AlarmCommercial);
      setState("alarmC");
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
  const handleChange3 = (e) => {
    const { name, value } = e.target;
    setCCtvC((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleChange4 = (e) => {
    const { name, value } = e.target;
    setAlarmD((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleChange5 = (e) => {
    const { name, value } = e.target;
    setAlarmC((prevFormData) => ({
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

  console.log(currentStep);
  const isLastStep = currentStep === steps.length - 1;
  return (
    <>
      {currentStep === 6 ? null :
        <Sidebar side1={sideState} side2={sideState1} side3={sideState2} side4={sideState3} side5={sideState4} side6={sideState5} />
      }
      <Topbar side1={sideState} />
      <div className={currentStep === 6 ? "" : styles.main}>
        <div>
          {StepComponent && (
            <StepComponent
              formData={state === "cctvd" ? CCtvD : state === "cctvc" ? CCtvC : state === "alarmD" ? alarmD : state === "alarmC" ? alarmC : formData}
              setVal={setCCtvD}
              handleChange={state === "cctvd" ? handleChange2 : state === "cctvc" ? handleChange3 : state === "alarmD" ? handleChange4 : state === "alarmC" ? handleChange5 : handleChange}
              next={nextStep}
            />
          )}
          <div className={styles.btn} style={{ display: isLastStep ? "none" : "block" }}>
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
