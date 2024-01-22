import { Card, Button, Avatar, Typography } from "@material-tailwind/react";
import trophyImg from "../../../assets/trophy-icon.gif";
import { TextInputElement } from "../../../components/atoms/TextInputElement";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerValidation } from "./validation";
import { UserModel } from "../../../models/UserModel";
import { useNavigate } from "react-router-dom";
import UserService from "../../../services/UserService";
import { NavLink } from "react-router-dom";
import { string } from "yup";
import AlertElement, {
  AlertElementRef,
} from "../../../components/atoms/AlertElement";
import { useRef } from "react";

export interface UserForm extends UserModel {
  confirmPass: string;
}
export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserForm>({
    resolver: yupResolver(registerValidation),
  });

  const alertRef = useRef<AlertElementRef>(null);

  const navigate = useNavigate();
  const handleRegister = async (data: UserModel) => {
    await UserService.register(data).then((response) => {
      if (typeof response === "string") {
        alertRef.current?.showMessage({
          message: response,
          type: "danger",
        });
      } else {
        alertRef.current?.showMessage({
          message: "Data Save Successful!",
          type: "success",
        });
        navigate("/login");
      }
    });
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
          onSubmit={handleSubmit(handleRegister)}
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
              register={register("userName")}
              errorMessage={errors?.userName?.message}
            />

            <TextInputElement
              label="Password"
              placeholder="Password"
              id="userPass"
              name="userPass"
              variant="outlined"
              color="blue-gray"
              register={register("userPass")}
              errorMessage={errors?.userPass?.message}
              type="password"
            />
            <TextInputElement
              label="Password Confirmation"
              placeholder="Password Confirmation"
              id="confirmPass"
              name="confirmPass"
              variant="outlined"
              color="blue-gray"
              register={register("confirmPass")}
              errorMessage={errors?.confirmPass?.message}
              type="password"
            />
          </div>

          <div className="flex flex-col">
            <Typography variant="small" className="flex justify-between">
              Do you have an Account?
              <NavLink to="/login" className="text-secondary font-semibold">
                Sign In!
              </NavLink>{" "}
            </Typography>
            <Button
              className="mt-6 bg-primary text-title"
              fullWidth
              type="submit"
            >
              Save
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
