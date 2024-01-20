import React, { useRef, useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
import MultiselectElement, {
  MultiselectRef,
} from "../../../components/atoms/MultiselectElement";
import { OptionItem } from "../../../types/OptionItem";
import TeamService from "../../../services/TeamService";
import { useQuery } from "react-query";
import ChampionshipService from "../../../services/ChampionshipService";
import { MatchScoreCard } from "../../../components/atoms/MatchScoreCardElement";
import {
  ChampionshipModel,
  EChampionshipStage,
  MatchModel,
} from "../../../models/ChampionshipModel";
import { filter } from "lodash";

export const Simulation = () => {
  const { data: teams } = useQuery(["team-options"], TeamService.getOptions, {
    retry: false,
    enabled: true,
    refetchOnWindowFocus: false,
  });

  const multiselectRef = useRef<MultiselectRef>(null);
  const [championship, setChampionship] = useState<ChampionshipModel>();

  const handleButtonClick = async () => {
    const selectedItems = multiselectRef.current?.getSelectedItems();
    await ChampionshipService.create({
      teams: selectedItems as string[],
      userUuid: "D4DF3501-C3BD-4346-B349-6C14E4E6C645",
    }).then((response) => {
      setChampionship(response);
    });
  };

  return (
    <div className="flex flex-col w-full gap-xl">
      <div className="flex flex-col">
        <Typography variant="h2" className="text-title">
          Team Selection & Championship Simulation
        </Typography>
        <Typography className="text-blue-gray-300">
          Choose your favorite teams and experience the excitement of a
          simulated championship.
        </Typography>
        <Typography className="text-blue-gray-300">
          Who will emerge victorious in this thrilling competition?
        </Typography>
      </div>
      <div className="flex gap-md">
        <MultiselectElement
          options={(teams ?? []) as OptionItem[]}
          ref={multiselectRef}
          label="Select Teams"
          className="flex1"
        />
        <Button
          type="button"
          className="bg-primary text-white"
          onClick={handleButtonClick}
        >
          Simulate
        </Button>
      </div>
      {championship && (
        <div className="flex flex-col w-full">
          <Typography>Results</Typography>
          <div className="flex w-full mt-md gap-5xl">
            <div className="flex flex-col gap-md items-center justify-center">
              <Typography>Quarter Finals</Typography>
              {championship.matches
                ?.filter(
                  (x: MatchModel) =>
                    x.championshipStage === EChampionshipStage.QuarterFinals
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
            <div className="flex flex-col gap-md items-center justify-center">
              <Typography>Quarter Finals</Typography>
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
            <div className="flex flex-col gap-md items-center justify-center">
              <Typography>Final</Typography>
              {championship.matches
                ?.filter(
                  (x: MatchModel) =>
                    x.championshipStage === EChampionshipStage.Final
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
            <div className="flex flex-col gap-md items-center justify-center">
              <Typography>Third Place Playoff</Typography>
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
        </div>
      )}
    </div>
  );
};
