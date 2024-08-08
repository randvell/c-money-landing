import {showFormSuccess, validateInputs} from './form';

const maxStep = 2;
const stepButtons = document.querySelectorAll('.register__step');

const form = document.getElementById('register-form') as HTMLFormElement | null;
const formSteps = document.querySelectorAll<HTMLElement>('.form__step');
const formParts = document.querySelectorAll<HTMLElement>('.form__step');

const controlStepButtons = (stepButtons: HTMLButtonElement[]) => {
  stepButtons.map((current) => {
    const button = current as HTMLButtonElement;
    button.addEventListener('click', () => {
      if (!button.disabled) {
        const stepId = Number(button.dataset.stepId);
        if (!Number.isNaN(stepId)) {
          changeStep(stepId);
        }
      }
    });
  });
};

const controlForm = () => {
  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    if (form.dataset.canSubmit) {
      showFormSuccess();
      form.reset();
      changeStep(0);
    }
  });

  formSteps.forEach((formStep) => {
    formStep.addEventListener('click', (e: Event) => {
      const target = e.target as HTMLElement;

      if (target && target.tagName === 'BUTTON') {
        const step = target.closest('.form__step') as HTMLElement;
        const stepId = Number(step.dataset.stepId);

        if (form && step && !Number.isNaN(stepId)) {
          const inputs = step.querySelectorAll<HTMLInputElement>('input');
          const hasErrors = validateInputs(inputs);
          if (!hasErrors) {
            if (stepId < maxStep) {
              changeStep(stepId + 1);
            } else {
              form.dataset.canSubmit = '1';
            }
          }
        }
      }
    });
  });
};

export const changeStep = (stepNum: number) => {
  [...formParts].forEach((current, i) => {
    if (i === stepNum) {
      current.classList.remove('hidden');
    } else {
      current.classList.add('hidden');
    }
  });

  [...stepButtons].forEach((current, i) => {
    const button = current as HTMLButtonElement;
    button.disabled = i >= stepNum;

    if (stepNum === i) {
      button.classList.add('register__step--active');
    } else {
      button.classList.remove('register__step--active');
    }
  });
};

controlForm();

const stepButtonArray = Array.from(stepButtons) as HTMLButtonElement[];
controlStepButtons(stepButtonArray);
