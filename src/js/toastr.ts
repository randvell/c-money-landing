import 'toastify-js/src/toastify.css';
import Toastify from 'toastify-js';

export const showErrorToast = (text: string) => {
  Toastify({
    text,
    duration: 3000,
    style: {
      background: '#c41e3a',
    },
  }).showToast();
};
