import { Input, InputProps, Typography } from "@material-tailwind/react";
import { ChangeEventHandler } from "react";
import { FieldErrors, UseFormRegisterReturn } from "react-hook-form";

export interface TextInputElementProps extends InputProps {
  handleChange?: ChangeEventHandler<HTMLInputElement>;
  register?: UseFormRegisterReturn;
  errorMessage?: string;
}

export const TextInputElement = ({
  errorMessage,
  ...props
}: TextInputElementProps) => {
  return (
    <div className="flex flex-col gap-2 items-start justify-start">
      <Input
        {...props}
        {...props.register}
        error={
          errorMessage !== null &&
          errorMessage !== "" &&
          errorMessage !== undefined
        }
      />
      <Typography className="text-danger" variant="small">
        {errorMessage}
      </Typography>
    </div>
  );
};
