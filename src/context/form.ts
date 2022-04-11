import React from "react";
import { ExperienceModel } from "../pages/experience/dialog/props";
import {
  PersonalDataForm,
  PersonalDataProps,
  AddressProps,
  ProfessionalProps,
} from "../pages/form/props";

export const FormContext = React.createContext({
  form: {
    personal: {} as PersonalDataProps,
    address: {} as AddressProps,
    professional: {} as ProfessionalProps,
    experiences: [] as Array<ExperienceModel>,
  } as PersonalDataForm,
  handleFormChange: (e: any, nameObject: string) => {},
  handleExperiencesChange: (
    remove: boolean,
    experience?: ExperienceModel,
    experiencesArr?: Array<ExperienceModel>
  ) => {},
});
