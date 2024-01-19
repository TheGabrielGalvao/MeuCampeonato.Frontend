import React, { useRef } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { SidebarMenu } from "../../../components/molecules/SidebarMenu";
import MultiselectElement, {
  MultiselectRef,
  MultiselectElementProps,
} from "../../../components/atoms/MultiselectElement";
import { OptionItem } from "../../../types/OptionItem";
import TeamService from "../../../services/TeamService";
import { useQuery } from "react-query";

export const Simulation = () => {
  const { data: teams } = useQuery(["team-options"], TeamService.getOptions, {
    retry: false,
    enabled: true,
    refetchOnWindowFocus: false,
  });

  const multiselectRef = useRef<MultiselectRef>(null);

  const handleButtonClick = () => {
    const selectedItems = multiselectRef.current?.getSelectedItems();
    console.log("Selected Items:", selectedItems);
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
    </div>
  );
};
