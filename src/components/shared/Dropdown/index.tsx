import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const Dropdown = ({
  trigger,
  children
}: {
  trigger: JSX.Element;
  children: JSX.Element;
}) => {
  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>{trigger}</DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content>{children}</DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </>
  );
};
