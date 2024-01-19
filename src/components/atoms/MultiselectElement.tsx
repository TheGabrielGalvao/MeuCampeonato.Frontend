import React, { forwardRef, useImperativeHandle, useState } from "react";
import clsx from "clsx";
import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Checkbox,
} from "@material-tailwind/react";
import { FaChevronDown } from "react-icons/fa";
import { OptionItem } from "../../types/OptionItem";

export interface MultiselectElementProps {
  options: OptionItem[];
  label?: string;
  className?: string;
}

export interface MultiselectRef {
  getSelectedItems: () => unknown[];
}

const MultiselectElement: React.ForwardRefRenderFunction<
  MultiselectRef,
  MultiselectElementProps
> = ({ options, label, className }, ref) => {
  const [selectedItems, setSelectedItems] = useState<unknown[]>([]);

  const handleCheckboxChange = (value: unknown) => {
    const updatedItems = selectedItems.includes(value)
      ? selectedItems.filter((item) => item !== value)
      : [...selectedItems, value];

    setSelectedItems(updatedItems);
  };

  useImperativeHandle(
    ref,
    () => ({
      getSelectedItems: () => selectedItems,
    }),
    [selectedItems]
  );

  return (
    <Menu
      dismiss={{
        itemPress: false,
      }}
    >
      <MenuHandler>
        <Button
          className={clsx(
            className,
            "border-2 border-active text-title flex justify-center items-center gap-sm"
          )}
          variant="outlined"
        >
          {label || "Menu"}
          <FaChevronDown />
        </Button>
      </MenuHandler>
      <MenuList>
        {options.map((option) => (
          <MenuItem key={option.value} className="p-0">
            <label
              htmlFor={`item-${option.value}`}
              className="flex cursor-pointer items-center gap-2 p-2"
            >
              <Checkbox
                ripple={false}
                id={`item-${option.value}`}
                containerProps={{ className: "p-0" }}
                className="hover:before:content-none"
                checked={selectedItems.includes(option.value)}
                onChange={() => handleCheckboxChange(option.value)}
              />
              {option.label}
            </label>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default forwardRef(MultiselectElement);
