import * as yup from "yup";
import { AuthModel } from "../../../models/AuthModel";

const required = (field: string) => `O campo ${field} é obrigatório`;

export const loginValidation = yup.object<AuthModel>().shape({
  username: yup.string().required(() => required("Username")),
  password: yup.string().required(() => required("Password")),
});
