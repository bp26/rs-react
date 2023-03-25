import { validateName, validateEmail } from './validation';

export const FORM_INPUTS = [
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
    validation: null,
  },
  {
    id: 4,
    type: 'checkbox',
    name: 'Consent',
    key: 'checkbox',
    error: 'checkboxError',
    validation: null,
  },
];
