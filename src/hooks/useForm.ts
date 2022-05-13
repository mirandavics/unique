import { useState } from 'react';
import { ExperienceModel } from '../pages/experience/dialog/props';
import {
  PersonalDataProps,
  ProfessionalProps,
  AddressProps,
  PersonalDataForm,
} from '../pages/form/props';

function useForm(): [
  form: PersonalDataForm,
  handleFormChange: (dataForm: PersonalDataForm) => void,
  handleExperiencesChange: (experiences: Array<ExperienceModel>) => void
] {
  const [form, setForm] = useState({
    personal: {} as PersonalDataProps,
    address: {} as AddressProps,
    professional: {} as ProfessionalProps,
    experiences: [] as Array<ExperienceModel>,
  } as PersonalDataForm);

  const handleFormChange = (dataForm: PersonalDataForm) => {
    setForm(dataForm);
  };

  const handleExperiencesChange = (experiences: Array<ExperienceModel>) => {
    setForm((prevState) => ({ ...prevState, experiences }));
  };

  return [
    form,
    (dataForm: PersonalDataForm) => handleFormChange(dataForm),
    (experiences: Array<ExperienceModel>) =>
      handleExperiencesChange(experiences),
  ];
}

export default useForm;
