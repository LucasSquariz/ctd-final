import Yup from 'settings/yup';

export const schema = Yup.object().shape({
  firstname: Yup.string(),
  lastname: Yup.string(),
  phone: Yup.string(),
  password: Yup.string(),
  confirm_password: Yup.string().oneOf([Yup.ref('password')]),
  dni: Yup.string(),
  email: Yup.string()
});
