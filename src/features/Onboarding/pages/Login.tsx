import { Card, Button, Avatar } from "@material-tailwind/react";
import trophyImg from "../../../assets/trophy-icon.gif";
import { TextInputElement } from "../../../components/atoms/TextInputElement";
import { useForm } from "react-hook-form";
import { AuthModel } from "../../../models/AuthModel";
import { useAuth } from "../../../context/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidation } from "./validation";

export function Login() {
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthModel>({
    resolver: yupResolver(loginValidation),
  });

  const handleLogin = async (data: AuthModel) => {
    await login(data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-2 py-10">
      <Card
        shadow={false}
        className="bg-active p-xl flex flex-col items-center justify-center gap-sm w-full sm:w-96"
      >
        <Avatar
          src={trophyImg}
          alt="avatar"
          variant="square"
          size="xl"
          className="w-auto"
        />
        <form
          className="mt-8 mb-2 w-full max-w-screen-md sm:w-96 flex flex-col gap-xl lg:px-xl sm:px-sm"
          onSubmit={handleSubmit(handleLogin)}
        >
          <div className="mb-1 flex flex-col gap-6">
            <TextInputElement
              label="Username"
              placeholder="Username"
              id="username"
              name="username"
              variant="outlined"
              color="blue-gray"
              register={register("username")}
              errorMessage={errors?.username?.message}
            />

            <TextInputElement
              label="Password"
              placeholder="Password"
              id="password"
              name="password"
              variant="outlined"
              color="blue-gray"
              register={register("password")}
              errorMessage={errors?.password?.message}
              type="password"
            />
          </div>

          <div className="flex flex-col">
            <Button
              variant="outlined"
              className="mt-6 text-title rounded-md border-2 border-title text-title"
              fullWidth
            >
              Social Login
            </Button>
            <Button
              className="mt-6 bg-primary text-title"
              fullWidth
              type="submit"
            >
              Login
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
