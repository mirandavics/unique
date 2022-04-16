import { useState } from "react";
import { ExperienceModel } from "../experience/dialog/props";
import {
  PersonalDataProps,
  ProfessionalProps,
  AddressProps,
  PersonalDataForm,
} from "../form/props";

export function useForm(): [
  form: PersonalDataForm,
  handleFormChange: (event: any, nameObject: string) => void,
  handleExperiencesChange: (
    remove: boolean,
    experience?: ExperienceModel,
    experiencesArr?: Array<ExperienceModel>
  ) => void
] {
  const [form, setForm] = useState({
    personal: {} as PersonalDataProps,
    address: {} as AddressProps,
    professional: {} as ProfessionalProps,
    experiences: [] as Array<ExperienceModel>,
  } as PersonalDataForm);

  const handleFormChange = (event: any, nameObject: string) => {
    const { name, value } = event.target;

    setForm((prevState: any) => ({
      ...prevState,
      [nameObject]: { ...prevState[nameObject], [name]: value },
    }));
  };

  const handleExperiencesChange = (
    remove: boolean,
    experience?: ExperienceModel,
    experiencesArr?: Array<ExperienceModel>
  ) => {
    if (!remove) {
      setForm((prevState: any) => ({
        ...prevState,
        experiences: [experience, ...prevState.experiences],
      }));
    } else {
      setForm((prevState: any) => ({
        ...prevState,
        experiences: experiencesArr,
      }));
    }
  };

  return [
    form,
    (event: any, nameObject: string) => handleFormChange(event, nameObject),
    (
      remove: boolean,
      experience?: ExperienceModel,
      experiencesArr?: Array<ExperienceModel>
    ) => handleExperiencesChange(remove, experience, experiencesArr),
  ];
}
