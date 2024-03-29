import { Card, Button, Avatar, Typography } from "@material-tailwind/react";
import trophyImg from "../../../assets/trophy-icon.gif";
import { TextInputElement } from "../../../components/atoms/TextInputElement";
import { useForm } from "react-hook-form";
import { AuthModel } from "../../../models/AuthModel";
import { useAuth } from "../../../context/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidation } from "./validation";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import AlertElement, {
  AlertElementRef,
} from "../../../components/atoms/AlertElement";
import { useRef } from "react";

export function Login() {
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthModel>({
    resolver: yupResolver(loginValidation),
  });
  const alertRef = useRef<AlertElementRef>(null);
  const handleLogin = async (data: AuthModel) => {
    var logged = await login(data);
    if (!logged) {
      alertRef.current?.showMessage({
        message: "Invalid Username or Password!",
        type: "danger",
      });
    }
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
            <AlertElement className="w-full mx-0 mt-[-4rem]" ref={alertRef} />
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
            <Typography variant="small" className="flex justify-between">
              Don't have an Account?{" "}
              <NavLink to="/register" className="text-secondary font-semibold">
                Register Now!
              </NavLink>{" "}
            </Typography>
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
