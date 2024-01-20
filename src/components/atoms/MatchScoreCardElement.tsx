import React from "react";
import { Card, Typography } from "@material-tailwind/react";

interface MatchScoreCardProps {
  homeTeam: string;
  awayTeam: string;
  homeTeamNormalTimeScore: number;
  awayTeamNormalTimeScore: number;
  homeTeamPenaltyScore?: number;
  awayTeamPenaltyScore?: number;
}

export const MatchScoreCard: React.FC<MatchScoreCardProps> = ({
  homeTeam,
  awayTeam,
  homeTeamNormalTimeScore,
  awayTeamNormalTimeScore,
  homeTeamPenaltyScore,
  awayTeamPenaltyScore,
}) => {
  return (
    <Card className="min-w-60">
      <div className="p-4 flex flex-col gap-sm">
        <div className="flex justify-between items-center">
          <Typography variant="h6" className="text-primary">
            {homeTeam}
          </Typography>
          <Typography variant="h6">{homeTeamNormalTimeScore}</Typography>
          {homeTeamPenaltyScore !== undefined && homeTeamPenaltyScore > 0 && (
            <Typography variant="h6">{homeTeamPenaltyScore} (P)</Typography>
          )}
        </div>
        <hr />
        <div className="flex justify-between items-center">
          <Typography variant="h6" className="text-primary">
            {awayTeam}
          </Typography>
          <Typography variant="h6">{awayTeamNormalTimeScore}</Typography>
          {awayTeamPenaltyScore !== undefined && awayTeamPenaltyScore > 0 && (
            <Typography variant="h6">{awayTeamPenaltyScore} (P)</Typography>
          )}
        </div>
      </div>
    </Card>
  );
};
