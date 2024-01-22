import React, {
  ReactNode,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Button,
} from "@material-tailwind/react";
import { FaTimes } from "react-icons/fa";

interface DialogElementProps {
  title?: string;
  children?: ReactNode;
}

export interface DialogElementRef {
  openDialog: () => void;
  closeDialog: () => void;
}

const DialogElement: React.ForwardRefRenderFunction<
  DialogElementRef,
  DialogElementProps
> = ({ size, children, title }, ref) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      openDialog: () => {
        setOpen(true);
      },
      closeDialog: () => {
        setOpen(false);
      },
    }),
    []
  );

  return (
    <Dialog open={open} size="xl" className="bg-background">
      <DialogHeader className="flex justify-between items-center py-0 pr-0 border-b-2">
        {title}
        <Button
          variant="text"
          color="red"
          onClick={() => setOpen(false)}
          className="mr-1"
        >
          <FaTimes size={32} />
        </Button>
      </DialogHeader>
      <DialogBody className="p-0 mt-0">{children}</DialogBody>
      <DialogFooter></DialogFooter>
    </Dialog>
  );
};

export default forwardRef(DialogElement);
