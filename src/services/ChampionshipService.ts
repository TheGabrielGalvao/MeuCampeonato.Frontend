import { api } from "../config/api";
import { ChampionshipModel } from "../models/ChampionshipModel";
import { BaseService } from "./BaseService";

const API_URL = "Championship";

export default new (class ChampionshipService extends BaseService<ChampionshipModel> {
  constructor() {
    super(API_URL, "uuid");
  }

  async getHistory(userUuid: string): Promise<ChampionshipModel[]> {
    const { data } = await api.get<ChampionshipModel[]>(
      `${this.getUrl()}/history/${userUuid}`,
      {
        headers: this.getHeaders(),
      }
    );

    return data;
  }
})();
