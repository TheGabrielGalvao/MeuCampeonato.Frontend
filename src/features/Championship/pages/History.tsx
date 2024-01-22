import { Card, Typography } from "@material-tailwind/react";
import ChampionshipService from "../../../services/ChampionshipService";
import { useQuery } from "react-query";
import { useRef, useState } from "react";
import DialogElement, {
  DialogElementRef,
} from "../../../components/atoms/DialogElement";
import { ChampionshipModel } from "../../../models/ChampionshipModel";
import { ChampionshipTemplate } from "../../../components/organisms/ChampionshipTemplate";
import { useAuth } from "../../../context/AuthContext";
import { isValidUUID } from "../../../util/styles/helper/stringHelper";

export const History = () => {
  const { userInfo } = useAuth();
  const { data: championships } = useQuery(
    ["championship-history"],
    () => ChampionshipService.getHistory(userInfo?.uuid!),
    {
      retry: false,
      enabled: isValidUUID(userInfo?.uuid),
      refetchOnWindowFocus: false,
    }
  );

  const dialogRef = useRef<DialogElementRef>(null);
  const [selectedChampionship, setSelectedChampionship] =
    useState<ChampionshipModel>();

  const handleShowChampionshipDetails = (championship: ChampionshipModel) => {
    setSelectedChampionship(championship);
    dialogRef.current?.openDialog();
  };

  return (
    <div className="flex flex-col w-full gap-xl">
      <DialogElement
        ref={dialogRef}
        title={`${selectedChampionship?.name} Details`}
      >
        <ChampionshipTemplate
          championship={selectedChampionship as ChampionshipModel}
        />
      </DialogElement>
      <div className="flex flex-col">
        <Typography variant="h2" className="text-title">
          This is a History of the Championships
        </Typography>
        <Typography className="text-blue-gray-300">
          See the details of your championships simulations
        </Typography>
      </div>
      <div className="flex gap-md flex-wrap max-w-[80%]">
        {championships?.map((item) => (
          <Card
            key={item.uuid}
            className="min-w-60 cursor-pointer"
            title="View Details"
            onClick={() => handleShowChampionshipDetails(item)}
          >
            <div className="p-4 flex flex-col gap-sm items-start">
              <Typography variant="h6">{item.name}</Typography>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
