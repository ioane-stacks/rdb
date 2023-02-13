import * as yup from "yup";

export const validationSchema = yup.object().shape({
  firstname: yup.string().min(2).required(),
  lastname: yup.string().min(2).required(),
  email: yup.string().min(13).email().required(),
  about: yup.string(),
});
