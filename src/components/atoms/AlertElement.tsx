import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Alert } from "@material-tailwind/react";
import clsx from "clsx";

interface AlertElementProps {
  className?: string;
  message?: string;
  type?: "info" | "warning" | "danger" | "success" | "default";
}

export interface AlertElementRef {
  showMessage: (message: AlertElementProps) => void;
  hideMessage: () => void;
}

const AlertElement: React.ForwardRefRenderFunction<
  AlertElementRef,
  AlertElementProps
> = ({ className }, ref) => {
  const [open, setOpen] = useState(false);
  const [messageData, setMessageData] = useState<AlertElementProps>();
  const alertRef = useRef(null);

  useImperativeHandle(
    ref,
    () => ({
      showMessage: (message) => {
        setMessageData(message);
        setOpen(true);
      },
      hideMessage: () => {
        setOpen(false);
      },
    }),
    []
  );

  return (
    <Alert
      ref={alertRef}
      className={clsx(
        {
          "bg-success/10 border-success text-success":
            messageData?.type === "success",
          "bg-info/10 border-info text-info": messageData?.type === "info",
          "bg-danger/10 border-danger text-danger":
            messageData?.type === "danger",
          "bg-warning/10 border-warning text-warning":
            messageData?.type === "warning",
          "bg-default border-default text-default":
            !messageData?.type || messageData?.type === "default",
        },
        "flex justify-start items-center",
        className
      )}
      open={open}
      onClose={() => setOpen(false)}
    >
      {messageData?.message}
    </Alert>
  );
};

export default forwardRef(AlertElement);
