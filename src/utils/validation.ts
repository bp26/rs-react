import { ValidationError } from '../types/enums';

export const validateName = (
  name: string | undefined,
  setter: (type: string, error: string) => void
) => {
  if (!name) {
    setter(ValidationError.NAME, `Full name field shouldn't be empty`);
    return false;
  }

  const length = name.split(' ').length;

  if (length < 2) {
    setter(ValidationError.NAME, `You should input both your first name and your last name`);
    return false;
  }

  if (length > 2) {
    setter(ValidationError.NAME, `You shouldn't input more than 2 words`);
    return false;
  }

  const [firstName, lastName] = name.split(' ');

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

export const validateBirthday = (
  dateValue: string | undefined,
  setter: (type: string, error: string) => void
) => {
  if (!dateValue) {
    setter(ValidationError.BIRTHDAY, `Birthday field should't be empty`);
    return false;
  }

  const date = new Date(dateValue);

  if (date > new Date()) {
    setter(ValidationError.BIRTHDAY, `Birthday shouldn't be later than the current date`);
    return false;
  }

  setter(ValidationError.BIRTHDAY, ``);
  return true;
};

export const validateCheckbox = (
  checked: boolean | undefined,
  setter: (type: string, error: string) => void
) => {
  if (!checked) {
    setter(ValidationError.CHECKBOX, `You should consent to having your data processed`);
    return false;
  }

  setter(ValidationError.CHECKBOX, ``);
  return true;
};

export const validateSelect = (
  value: string | undefined,
  setter: (type: string, error: string) => void
) => {
  if (value === 'Choose an option') {
    setter(ValidationError.LANGUAGE, `You should choose your language`);
    return false;
  }

  setter(ValidationError.LANGUAGE, ``);
  return true;
};

export const validateSwitcher = (
  firstOption: boolean | undefined,
  secondOption: boolean | undefined,
  setter: (type: string, error: string) => void
) => {
  if (!firstOption && !secondOption) {
    setter(ValidationError.GENDER, `You should choose your gender`);
    return false;
  }

  setter(ValidationError.GENDER, ``);
  return true;
};

export const validateFile = (
  filePath: string | undefined,
  setter: (type: string, error: string) => void
) => {
  if (!filePath) {
    setter(ValidationError.AVATAR, `You should choose your avatar`);
    return false;
  }

  const correctExtensions = ['png', 'jpeg', 'jpg', 'bmp'];
  const ext = filePath.split('.').at(-1);
  if (ext && !correctExtensions.includes(ext)) {
    setter(ValidationError.AVATAR, `Wrong image file type`);
    return false;
  }

  setter(ValidationError.AVATAR, ``);
  return true;
};
