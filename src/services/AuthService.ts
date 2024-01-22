import { AxiosResponse } from "axios";
import { BaseService } from "./BaseService";
import { api } from "../config/api";
import { AuthModel, AuthResponse } from "../models/AuthModel";

const API_URL = "Auth";

export default new (class AuthService extends BaseService<AuthModel> {
  constructor() {
    super(API_URL);
  }

  async login(data: AuthModel): Promise<AuthResponse> {
    const response: AxiosResponse<AuthResponse> = await api.post(
      `${this.getUrl()}/login`,
      data
    );
    return response.data;
  }

  async verifyToken(token: string) {
    try {
      const response = await api.get(`${this.getUrl()}/VerifyToken`, {
        params: { token },
      });
      return response.data;
    } catch (error) {
      console.error("Error verifying token", error);
      return null;
    }
  }
})();
