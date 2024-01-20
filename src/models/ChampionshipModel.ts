import { UserModel } from "./UserModel";

export interface ChampionshipModel {
  uuid?: string;
  name?: string;
  teams: string[];
  userUuid: string;
  user?: UserModel;
  matches?: MatchModel[];
}

export interface MatchModel {
  uuid?: string;
  homeTeamName: string;
  awayTeamName: string;
  homeTeamNormalTimeScore: number;
  awayTeamNormalTimeScore: number;
  homeTeamPenaltyScore?: number;
  awayTeamPenaltyScore?: number;
  matchWinnerName: string;
  championshipStage: EChampionshipStage;
  championshipUuid: string;
}

export enum EChampionshipStage {
  QuarterFinals = 0,
  SemiFinals = 1,
  ThirdPlacePlayoff = 2,
  Final = 3,
}
