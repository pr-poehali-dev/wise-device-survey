export interface SurveyData {
  selectedDevice: string;
  hasVPN: string;
  hasNonRFSim: string;
  wantsESim: string;
}

export interface SurveyStep {
  title: string;
  options: { value: string; label: string; id: string }[];
}

export type StepNumber = 1 | 2 | 3 | 4;
