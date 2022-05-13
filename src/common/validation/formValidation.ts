import {
  AddressProps,
  PersonalDataForm,
  PersonalDataProps,
  ProfessionalProps,
} from '../../pages/form/props';
import StepsEnum from '../enum/stepsEnum';

function validateForm(
  personal: PersonalDataProps,
  address: AddressProps,
  professional: ProfessionalProps
): [isValid: boolean, message: string] {
  if (
    !personal.fullName ||
    !personal.birth ||
    !personal.email ||
    !personal.mobileNumber
  ) {
    return [false, 'Please, fill in the personal data fields'];
  }

  if (!address.city || !address.state || !address.street || !address.zipCode) {
    return [false, 'Please, fill in the address fields'];
  }

  if (
    !professional.description ||
    !professional.desirePay ||
    !professional.position
  ) {
    return [false, 'Please, fill in the professional fields'];
  }

  return [true, ''];
}

function isFormValid(
  step: StepsEnum,
  form: PersonalDataForm
): [isValid: boolean, message: string] {
  if (step === StepsEnum.FORM) {
    return validateForm(form.personal, form.address, form.professional);
  }
  if (step === StepsEnum.EXPERIENCES) {
    const hasExperience = Boolean(form.experiences.length);
    const message = !hasExperience
      ? "Please, add an experience in the button 'Add experience'."
      : '';

    return [hasExperience, message];
  }

  return [false, 'Please, fill in the fields.'];
}

export default isFormValid;
