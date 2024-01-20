import { ChampionshipModel } from "../models/ChampionshipModel";
import { BaseService } from "./BaseService";

const API_URL = "Championship";

export default new (class ChampionshipService extends BaseService<ChampionshipModel> {
  constructor() {
    super(API_URL, "uuid");
  }
})();
