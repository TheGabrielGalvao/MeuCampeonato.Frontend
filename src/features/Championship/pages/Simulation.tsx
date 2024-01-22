import React, { useRef, useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
import MultiselectElement, {
  MultiselectRef,
} from "../../../components/atoms/MultiselectElement";
import { OptionItem } from "../../../types/OptionItem";
import TeamService from "../../../services/TeamService";
import { useQuery } from "react-query";
import ChampionshipService from "../../../services/ChampionshipService";
import { ChampionshipModel } from "../../../models/ChampionshipModel";
import AlertElement, {
  AlertElementRef,
} from "../../../components/atoms/AlertElement";
import { ChampionshipTemplate } from "../../../components/organisms/ChampionshipTemplate";
import { useAuth } from "../../../context/AuthContext";

export const Simulation = () => {
  const { data: teams } = useQuery(["team-options"], TeamService.getOptions, {
    retry: false,
    enabled: true,
    refetchOnWindowFocus: false,
  });

  const multiselectRef = useRef<MultiselectRef>(null);
  const [championship, setChampionship] = useState<ChampionshipModel>();
  const { userInfo } = useAuth();
  const alertRef = useRef<AlertElementRef>(null);

  const handleButtonClick = async () => {
    alertRef.current?.hideMessage();
    const selectedItems = multiselectRef.current?.getSelectedItems();
    if (selectedItems?.length === 8 && userInfo?.uuid) {
      await ChampionshipService.create({
        teams: selectedItems as string[],
        userUuid: userInfo?.uuid!,
      }).then((response) => {
        alertRef.current?.showMessage({
          message: "Simulation generated successfully!",
          type: "success",
        });
        setChampionship(response);
      });
    } else {
      alertRef.current?.showMessage({
        message: "You must select 8 teams!",
        type: "danger",
      });
    }
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
          className="py-sm"
        />
        <Button
          type="button"
          className="bg-primary text-white py-sm"
          onClick={handleButtonClick}
        >
          Simulate
        </Button>
        <AlertElement ref={alertRef} />
      </div>
      <div className="flex flex-col w-full">
        <Typography>Results</Typography>
        {championship && <ChampionshipTemplate championship={championship} />}
      </div>
    </div>
  );
};
