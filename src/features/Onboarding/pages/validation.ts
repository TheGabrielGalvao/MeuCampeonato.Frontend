import * as yup from "yup";
import { AuthModel } from "../../../models/AuthModel";
import {
  passwordMatch,
  required,
} from "../../../util/styles/helper/validationHelper";
import { UserForm } from "./Register";

export const loginValidation = yup.object<AuthModel>().shape({
  username: yup.string().required(() => required("Username")),
  password: yup.string().required(() => required("Password")),
});

export const registerValidation = yup.object<UserForm>().shape({
  userName: yup.string().required(() => required("Username")),
  userPass: yup.string().required(() => required("Password")),
  confirmPass: yup
    .string()
    .required(() => required("Confirm Pass"))
    .oneOf([yup.ref("userPass")], passwordMatch),
});
