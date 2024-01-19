import * as yup from "yup";
import { required } from "../../../util/styles/helper/validationHelper";
import { TeamModel } from "../../../models/TeamModel";

export const teamValidation = yup.object<TeamModel>().shape({
  name: yup.string().required(() => required("Name")),
});
