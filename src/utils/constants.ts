import { validateName, validateEmail, validateBirthday } from './validation';

export const SIMPLE_INPUTS = [
  {
    id: 1,
    type: 'text',
    name: 'Full Name',
    key: 'name',
    error: 'nameError',
    validation: validateName,
  },
  {
    id: 2,
    type: 'email',
    name: 'Email',
    key: 'email',
    error: 'emailError',
    validation: validateEmail,
  },
  {
    id: 3,
    type: 'date',
    name: 'Date of birth',
    key: 'birthday',
    error: 'birthdayError',
    validation: validateBirthday,
  },
];

export const LANGUAGE_DATA = [
  {
    id: 1,
    value: 'Choose an option',
  },
  {
    id: 2,
    value: 'Russian',
  },
  {
    id: 3,
    value: 'Belarussian',
  },
  {
    id: 4,
    value: 'English',
  },
];

export const GENDER_DATA = [
  {
    id: 1,
    value: 'Male',
    ref: 'firstOption',
  },
  {
    id: 2,
    value: 'Female',
    ref: 'secondOption',
  },
];
