/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { ExperienceModel } from '../pages/experience/dialog/props';
import {
  PersonalDataForm,
  PersonalDataProps,
  AddressProps,
  ProfessionalProps,
} from '../pages/form/props';

const FormContext = React.createContext({
  form: {
    personal: {} as PersonalDataProps,
    address: {} as AddressProps,
    professional: {} as ProfessionalProps,
    experiences: [] as Array<ExperienceModel>,
  } as PersonalDataForm,
  handleFormChange: (dataForm: PersonalDataForm) => {
    /* handle form */
  },
  handleExperiencesChange: (experiences: Array<ExperienceModel>) => {
    /* handle experience */
  },
});

export default FormContext;
