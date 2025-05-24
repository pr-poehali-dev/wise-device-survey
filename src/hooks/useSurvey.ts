import { useState } from "react";
import { SurveyData, StepNumber } from "@/types/survey";

export const useSurvey = () => {
  const [step, setStep] = useState<StepNumber>(1);
  const [surveyData, setSurveyData] = useState<SurveyData>({
    selectedDevice: "",
    hasVPN: "",
    hasNonRFSim: "",
    wantsESim: "",
  });

  const updateField = (field: keyof SurveyData, value: string) => {
    setSurveyData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < 4) {
      setStep((prev) => (prev + 1) as StepNumber);
    }
  };

  const showResults = () => {
    const { selectedDevice, hasVPN, hasNonRFSim, wantsESim } = surveyData;

    if (step === 3 && hasNonRFSim === "ДА") {
      alert(
        `Устройство: ${selectedDevice}, ВПН: ${hasVPN}, Не РФ сим-карта: ${hasNonRFSim}`,
      );
    } else if (step === 4) {
      alert(
        `Устройство: ${selectedDevice}, ВПН: ${hasVPN}, Не РФ сим-карта: ${hasNonRFSim}, E-sim: ${wantsESim}`,
      );
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return !!surveyData.selectedDevice;
      case 2:
        return !!surveyData.hasVPN;
      case 3:
        return !!surveyData.hasNonRFSim;
      case 4:
        return !!surveyData.wantsESim;
      default:
        return false;
    }
  };

  return {
    step,
    surveyData,
    updateField,
    nextStep,
    showResults,
    canProceed,
  };
};
