import * as yup from "yup";
import { AuthModel } from "../../../models/AuthModel";
import { required } from "../../../util/styles/helper/validationHelper";

export const loginValidation = yup.object<AuthModel>().shape({
  username: yup.string().required(() => required("Username")),
  password: yup.string().required(() => required("Password")),
});
