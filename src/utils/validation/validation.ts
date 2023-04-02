export const validateName = (name: string | undefined): string | boolean => {
  if (!name) {
    return `Full name field shouldn't be empty`;
  }

  const length = name.split(' ').length;

  if (length < 2) {
    return `You should input both your first name and your last name`;
  }

  if (length > 2) {
    return `You shouldn't input more than 2 words`;
  }

  const [firstName, lastName] = name.split(' ');

  if (firstName.length < 3 || lastName.length < 3) {
    return `First name and last name should be at least 3 character long`;
  }

  return true;
};

export const validateEmail = (email: string | undefined) => {
  if (!email) {
    return `Email field shouldn't be empty`;
  }

  if (!email.match(/\S+@\S+\.\S+/)) {
    return `Wrong format of email`;
  }

  return true;
};

export const validateBirthday = (dateValue: string | undefined) => {
  if (!dateValue) {
    return `Birthday field should't be empty`;
  }

  const date = new Date(dateValue);

  if (date > new Date()) {
    return `Birthday shouldn't be later than the current date`;
  }

  return true;
};

export const validateCheckbox = (checked: boolean | undefined) => {
  if (!checked) {
    return `You should consent to having your data processed`;
  }

  return true;
};

export const validateSelect = (value: string | undefined) => {
  if (value === 'Choose an option') {
    return `You should choose your language`;
  }

  return true;
};

export const validateSwitcher = (value: string) => {
  if (!value) {
    return `You should choose your gender`;
  }

  return true;
};

export const validateFile = (fileList: FileList) => {
  const file = fileList[0];

  if (!file) {
    return `You should choose your avatar`;
  }

  const correctExtensions = ['png', 'jpeg', 'jpg', 'bmp'];
  const ext = file.name.split('.').at(-1);

  if (ext && !correctExtensions.includes(ext)) {
    return `Wrong file type`;
  }

  return true;
};
