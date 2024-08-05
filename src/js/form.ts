import {showErrorToast} from './toastr';

export const showFormError = (text: string) => {
  showErrorToast(text);
};

export const validateInputs = (inputs: NodeListOf<HTMLInputElement>) => {
  return [...inputs].some(({value, name}) => {
    if (name === 'password') {
      const passwordValidationElement = document.querySelector(
        'input[name="password-validation"]'
      ) as HTMLInputElement | null;

      if (passwordValidationElement) {
        const passwordValidation = passwordValidationElement.value;
        if (value !== passwordValidation) {
          showFormError('Пароли не совпадают');
          return true;
        }
      }
    }

    if (value.trim() === '') {
      showFormError(`Необходимо заполнить значение поля ${name}`);
      return true;
    }

    return false;
  });
};

export const showSuccessModal = () => {};
