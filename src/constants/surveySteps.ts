import { SurveyStep } from "@/types/survey";

export const SURVEY_STEPS: Record<number, SurveyStep> = {
  1: {
    title: "На каком устройстве вы будете пользоваться вашим WISE?",
    options: [
      { value: "Android", label: "Android", id: "android" },
      { value: "iOS", label: "iOS", id: "ios" },
      { value: "ПК", label: "ПК", id: "pc" },
    ],
  },
  2: {
    title: "У вас есть европейский ВПН?",
    options: [
      { value: "ДА", label: "ДА", id: "yes" },
      { value: "НЕТ", label: "НЕТ", id: "no" },
    ],
  },
  3: {
    title: "У вас есть не РФ Сим-карта?",
    options: [
      { value: "ДА", label: "ДА", id: "sim-yes" },
      { value: "НЕТ", label: "НЕТ", id: "sim-no" },
    ],
  },
  4: {
    title:
      "Мы можем зарегистрировать ваш аккаунт на европейскую E-sim и продать ее вам. Хотите приобрести E-sim?",
    options: [
      { value: "ДА", label: "ДА", id: "esim-yes" },
      { value: "НЕТ", label: "НЕТ", id: "esim-no" },
    ],
  },
};
