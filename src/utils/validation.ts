import { ValidationError } from '../types/enums';

export const validateName = (
  name: string | undefined,
  setter: (type: string, error: string) => void
) => {
  if (!name) {
    setter(ValidationError.NAME, `Full name field shouldn't be empty`);
    return false;
  }

  const [firstName, lastName] = name.split(' ');

  if (!firstName || !lastName) {
    setter(ValidationError.NAME, `You should input both your first name and your last name`);
    return false;
  }

  if (firstName.length < 3 || lastName.length < 3) {
    setter(ValidationError.NAME, `First name and last name should be at least 3 character long`);
    return false;
  }

  setter(ValidationError.NAME, ``);
  return true;
};

export const validateEmail = (
  email: string | undefined,
  setter: (type: string, error: string) => void
) => {
  if (!email) {
    setter(ValidationError.EMAIL, `Email field shouldn't be empty`);
    return false;
  }

  if (!email.match(/\S+@\S+\.\S+/)) {
    setter(ValidationError.EMAIL, `Wrong format of email`);
    return false;
  }

  setter(ValidationError.EMAIL, ``);
  return true;
};
