import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TeamModel } from "../../../models/TeamModel";
import TeamService from "../../../services/TeamService";
import { useQuery, useQueryClient } from "react-query";
import { teamValidation } from "./validation";
import {
  Button,
  Card,
  List,
  ListItem,
  Typography,
} from "@material-tailwind/react";
import { TextInputElement } from "../../../components/atoms/TextInputElement";

export const TeamForm = () => {
  const queryClient = useQueryClient();

  const { data: teams } = useQuery(["team-list"], () => TeamService.getAll(), {
    retry: false,
    enabled: true,
    refetchOnWindowFocus: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TeamModel>({
    resolver: yupResolver(teamValidation),
  });

  const handleSubmitTeam = async (data: UserModel) => {
    const objectSave: UserModel = {
      ...data,
    };
    await TeamService.create(objectSave);

    queryClient.invalidateQueries(["team-options"]);
    queryClient.invalidateQueries(["team-list"]);
  };

  return (
    <div className="flex flex-col w-full gap-xl">
      <div className="flex flex-col">
        <Typography variant="h2" className="text-title">
          Team Registration
        </Typography>
        <Typography className="text-blue-gray-300">
          Register your favorite teams and get ready for the competition.
        </Typography>
      </div>
      <div className="flex flex-col gap-md">
        <form
          className="flex items-start justify-start gap-md"
          onSubmit={handleSubmit(handleSubmitTeam)}
        >
          <TextInputElement
            label="Team Name"
            placeholder="Team Name"
            id="name"
            name="name"
            variant="outlined"
            color="blue-gray"
            register={register("name")}
            errorMessage={errors?.name?.message}
            className="w-96"
          />
          <Button className="bg-primary text-white" type="submit">
            Salvar
          </Button>
        </form>
        <Card className="w-96">
          <List>
            {teams?.map((team) => (
              <ListItem>{team.name}</ListItem>
            ))}
          </List>
        </Card>
      </div>
    </div>
  );
};
