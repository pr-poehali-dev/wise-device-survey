import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSurvey } from "@/hooks/useSurvey";
import { SURVEY_STEPS } from "@/constants/surveySteps";
import SurveyStep from "@/components/survey/SurveyStep";

const Index = () => {
  const { step, surveyData, updateField, nextStep, showResults, canProceed } =
    useSurvey();

  const currentStep = SURVEY_STEPS[step];

  const handleSubmit = () => {
    if (step === 3 && surveyData.hasNonRFSim === "ДА") {
      showResults();
    } else if (step === 3 && surveyData.hasNonRFSim === "НЕТ") {
      nextStep();
    } else if (step === 4) {
      showResults();
    } else {
      nextStep();
    }
  };

  const getCurrentValue = () => {
    switch (step) {
      case 1:
        return surveyData.selectedDevice;
      case 2:
        return surveyData.hasVPN;
      case 3:
        return surveyData.hasNonRFSim;
      case 4:
        return surveyData.wantsESim;
      default:
        return "";
    }
  };

  const handleValueChange = (value: string) => {
    switch (step) {
      case 1:
        updateField("selectedDevice", value);
        break;
      case 2:
        updateField("hasVPN", value);
        break;
      case 3:
        updateField("hasNonRFSim", value);
        break;
      case 4:
        updateField("wantsESim", value);
        break;
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <p className="text-xl font-normal text-gray-600 mb-12 text-center leading-relaxed max-w-lg mx-auto">
          Пройдите небольшую анкету, в зависимости от ваших ответов мы
          предоставим Вам аккаунт адаптированный именно под Вас!
        </p>
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-semibold text-gray-900">
              {currentStep.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <SurveyStep
              value={getCurrentValue()}
              onValueChange={handleValueChange}
              options={currentStep.options}
            />

            <Button
              onClick={handleSubmit}
              disabled={!canProceed()}
              className="w-full mt-6 h-12 text-lg"
            >
              {step === 4 ? "Завершить" : "Продолжить"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
