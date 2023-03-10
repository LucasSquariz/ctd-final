import { toast } from 'react-toastify';

export function success(message: string) {
  toast(message, {
    type: 'success',
    position: toast.POSITION.BOTTOM_RIGHT,
    className: 'toast-success',
    closeOnClick: true,
    progressClassName: 'success-progress-bar',
    bodyClassName: 'success-body',
    theme: 'colored',
    autoClose: 4000
  });
}
