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
    <Card className="min-w-56">
      <div className="p-4 flex flex-col gap-sm items-start">
        <div className="flex justify-start items-start gap-md">
          <div className="flex items-center justify-center gap-sm">
            <Typography variant="paragraph">
              {homeTeamNormalTimeScore}
            </Typography>
            {homeTeamNormalTimeScore === awayTeamNormalTimeScore && (
              <Typography variant="paragraph">
                {homeTeamPenaltyScore} (P)
              </Typography>
            )}
          </div>
          <Typography variant="paragraph" className="text-primary">
            {homeTeam}
          </Typography>
        </div>
        <div className="flex justify-start items-start gap-md">
          <div className="flex items-center justify-center gap-sm">
            <Typography variant="paragraph">
              {awayTeamNormalTimeScore}
            </Typography>
            {homeTeamNormalTimeScore === awayTeamNormalTimeScore && (
              <Typography variant="paragraph">
                {awayTeamPenaltyScore} (P)
              </Typography>
            )}
          </div>

          <Typography variant="paragraph" className="text-primary">
            {awayTeam}
          </Typography>
        </div>
      </div>
    </Card>
  );
};
