const REQUIRED_FIELD = 'This field is required';

export const nameValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.match(/[а-яА-Я-0-9]/)) {
      return 'Name may contain only latin letters';
    }

    return true;
  },
};
