import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface SurveyStepProps {
  value: string;
  onValueChange: (value: string) => void;
  options: { value: string; label: string; id: string }[];
}

const SurveyStep = ({ value, onValueChange, options }: SurveyStepProps) => {
  return (
    <RadioGroup
      value={value}
      onValueChange={onValueChange}
      className="space-y-4"
    >
      {options.map((option) => (
        <div
          key={option.id}
          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <RadioGroupItem value={option.value} id={option.id} />
          <Label htmlFor={option.id} className="text-lg cursor-pointer flex-1">
            {option.label}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
};

export default SurveyStep;
