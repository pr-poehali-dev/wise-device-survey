import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [step, setStep] = useState<number>(1);
  const [selectedDevice, setSelectedDevice] = useState<string>("");
  const [hasVPN, setHasVPN] = useState<string>("");
  const [hasNonRFSim, setHasNonRFSim] = useState<string>("");

  const handleFirstStep = () => {
    if (selectedDevice) {
      setStep(2);
    }
  };

  const handleSecondStep = () => {
    if (hasVPN) {
      setStep(3);
    }
  };

  const handleThirdStep = () => {
    if (hasNonRFSim) {
      alert(
        `Устройство: ${selectedDevice}, ВПН: ${hasVPN}, Не РФ сим-карта: ${hasNonRFSim}`,
      );
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold text-gray-900">
            {step === 1
              ? "На каком устройстве вы будете пользоваться вашим WISE?"
              : step === 2
                ? "У вас есть европейский ВПН?"
                : "У вас есть не РФ Сим-карта?"}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {step === 1 ? (
            <RadioGroup
              value={selectedDevice}
              onValueChange={setSelectedDevice}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <RadioGroupItem value="Android" id="android" />
                <Label
                  htmlFor="android"
                  className="text-lg cursor-pointer flex-1"
                >
                  📱 Android
                </Label>
              </div>

              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <RadioGroupItem value="iOS" id="ios" />
                <Label htmlFor="ios" className="text-lg cursor-pointer flex-1">
                  🍎 iOS
                </Label>
              </div>

              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <RadioGroupItem value="ПК" id="pc" />
                <Label htmlFor="pc" className="text-lg cursor-pointer flex-1">
                  💻 ПК
                </Label>
              </div>
            </RadioGroup>
          ) : step === 2 ? (
            <RadioGroup
              value={hasVPN}
              onValueChange={setHasVPN}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <RadioGroupItem value="ДА" id="yes" />
                <Label htmlFor="yes" className="text-lg cursor-pointer flex-1">
                  ✅ ДА
                </Label>
              </div>

              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <RadioGroupItem value="НЕТ" id="no" />
                <Label htmlFor="no" className="text-lg cursor-pointer flex-1">
                  ❌ НЕТ
                </Label>
              </div>
            </RadioGroup>
          ) : (
            <RadioGroup
              value={hasNonRFSim}
              onValueChange={setHasNonRFSim}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <RadioGroupItem value="ДА" id="sim-yes" />
                <Label
                  htmlFor="sim-yes"
                  className="text-lg cursor-pointer flex-1"
                >
                  ✅ ДА
                </Label>
              </div>

              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <RadioGroupItem value="НЕТ" id="sim-no" />
                <Label
                  htmlFor="sim-no"
                  className="text-lg cursor-pointer flex-1"
                >
                  ❌ НЕТ
                </Label>
              </div>
            </RadioGroup>
          )}

          <Button
            onClick={
              step === 1
                ? handleFirstStep
                : step === 2
                  ? handleSecondStep
                  : handleThirdStep
            }
            disabled={
              step === 1 ? !selectedDevice : step === 2 ? !hasVPN : !hasNonRFSim
            }
            className="w-full mt-6 h-12 text-lg"
          >
            {step === 1
              ? "Продолжить"
              : step === 2
                ? "Продолжить"
                : "Завершить"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
