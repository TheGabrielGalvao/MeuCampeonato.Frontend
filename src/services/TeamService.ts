import { TeamModel } from "../models/TeamModel";
import { BaseService } from "./BaseService";

const API_URL = "Team";

export default new (class TeamService extends BaseService<TeamModel> {
  constructor() {
    super(API_URL, "uuid");
  }
})();
