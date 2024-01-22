import { Typography } from "@material-tailwind/react";
import {
  ChampionshipModel,
  EChampionshipStage,
  MatchModel,
} from "../../models/ChampionshipModel";
import { MatchScoreCard } from "../atoms/MatchScoreCardElement";

interface ChampionshipTemplateProps {
  championship: ChampionshipModel;
}

export const ChampionshipTemplate = ({
  championship,
}: ChampionshipTemplateProps) => {
  return (
    <div className="flex w-full mt-md gap-xl justify-center items-center bg-background py-sm">
      <div className="flex flex-col gap-md items-start justify-center">
        <Typography variant="h6">Quarter Finals</Typography>
        {championship.matches
          ?.filter(
            (x: MatchModel) =>
              Number(x.championshipStage) ===
              Number(EChampionshipStage.QuarterFinals)
          )
          .map((match) => (
            <MatchScoreCard
              homeTeam={match.homeTeamName}
              awayTeam={match.awayTeamName}
              homeTeamNormalTimeScore={match.homeTeamNormalTimeScore}
              awayTeamNormalTimeScore={match.awayTeamNormalTimeScore}
              homeTeamPenaltyScore={match.homeTeamPenaltyScore}
              awayTeamPenaltyScore={match.awayTeamPenaltyScore}
            />
          ))}
      </div>
      <div className="flex flex-col gap-md items-start justify-center">
        <Typography variant="h6">Semi Finals</Typography>
        {championship.matches
          ?.filter(
            (x: MatchModel) =>
              x.championshipStage === EChampionshipStage.SemiFinals
          )
          .map((match) => (
            <MatchScoreCard
              homeTeam={match.homeTeamName}
              awayTeam={match.awayTeamName}
              homeTeamNormalTimeScore={match.homeTeamNormalTimeScore}
              awayTeamNormalTimeScore={match.awayTeamNormalTimeScore}
              homeTeamPenaltyScore={match.homeTeamPenaltyScore}
              awayTeamPenaltyScore={match.awayTeamPenaltyScore}
            />
          ))}
      </div>
      <div className="flex flex-col gap-md items-start justify-center">
        <Typography variant="h6">Final</Typography>
        {championship.matches
          ?.filter(
            (x: MatchModel) => x.championshipStage === EChampionshipStage.Final
          )
          .map((match) => (
            <MatchScoreCard
              homeTeam={match.homeTeamName}
              awayTeam={match.awayTeamName}
              homeTeamNormalTimeScore={match.homeTeamNormalTimeScore}
              awayTeamNormalTimeScore={match.awayTeamNormalTimeScore}
              homeTeamPenaltyScore={match.homeTeamPenaltyScore}
              awayTeamPenaltyScore={match.awayTeamPenaltyScore}
              matchWinnerName={match.matchWinnerName}
            />
          ))}
      </div>
      <div className="flex flex-col gap-md items-start justify-center">
        <Typography variant="h6">Third Place Playoff</Typography>
        {championship.matches
          ?.filter(
            (x: MatchModel) =>
              x.championshipStage === EChampionshipStage.ThirdPlacePlayoff
          )
          .map((match) => (
            <MatchScoreCard
              homeTeam={match.homeTeamName}
              awayTeam={match.awayTeamName}
              homeTeamNormalTimeScore={match.homeTeamNormalTimeScore}
              awayTeamNormalTimeScore={match.awayTeamNormalTimeScore}
              homeTeamPenaltyScore={match.homeTeamPenaltyScore}
              awayTeamPenaltyScore={match.awayTeamPenaltyScore}
            />
          ))}
      </div>
    </div>
  );
};
