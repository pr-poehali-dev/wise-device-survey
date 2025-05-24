import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [selectedDevice, setSelectedDevice] = useState<string>("");

  const handleSubmit = () => {
    if (selectedDevice) {
      alert(`Вы выбрали: ${selectedDevice}`);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold text-gray-900">
            На каком устройстве вы будете пользоваться вашим WISE?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
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

          <Button
            onClick={handleSubmit}
            disabled={!selectedDevice}
            className="w-full mt-6 h-12 text-lg"
          >
            Продолжить
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
