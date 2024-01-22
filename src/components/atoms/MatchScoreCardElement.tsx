import React from "react";
import { Card, Typography } from "@material-tailwind/react";
import { GiTrophyCup } from "react-icons/gi";

interface MatchScoreCardProps {
  homeTeam: string;
  awayTeam: string;
  homeTeamNormalTimeScore: number;
  awayTeamNormalTimeScore: number;
  homeTeamPenaltyScore?: number;
  awayTeamPenaltyScore?: number;
  matchWinnerName?: string;
}

export const MatchScoreCard: React.FC<MatchScoreCardProps> = ({
  homeTeam,
  awayTeam,
  homeTeamNormalTimeScore,
  awayTeamNormalTimeScore,
  homeTeamPenaltyScore,
  awayTeamPenaltyScore,
  matchWinnerName,
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
          <Typography
            variant="paragraph"
            className="text-primary flex justify-center items-center gap-md"
          >
            {homeTeam}
            {homeTeam === matchWinnerName && (
              <GiTrophyCup size={22} className="text-warning" />
            )}
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

          <Typography variant="paragraph" className="text-primary flex">
            {awayTeam}
            {awayTeam === matchWinnerName && (
              <GiTrophyCup size={22} className="text-warning" />
            )}
          </Typography>
        </div>
      </div>
    </Card>
  );
};
