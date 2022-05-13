import { ExperienceModel } from '../experience/dialog/props';

export interface PersonalDataProps {
  fullName: string;
  birth: string;
  email: string;
  mobileNumber: string;
}

export interface AddressProps {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface ProfessionalProps {
  position: string;
  desirePay: string;
  description: string;
}

export interface PersonalDataForm {
  personal: PersonalDataProps;
  address: AddressProps;
  professional: ProfessionalProps;
  experiences: Array<ExperienceModel>;
}
