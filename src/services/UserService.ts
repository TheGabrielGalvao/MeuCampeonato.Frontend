import { UserModel } from "../models/UserModel";
import { BaseService } from "./BaseService";

const API_URL = "User";

export default new (class UserService extends BaseService<UserModel> {
  constructor() {
    super(API_URL, "uuid");
  }
})();
