"use client";

import { RowsIcon } from "@radix-ui/react-icons";
import * as Dropdown from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

const HamburgerMenu: React.FC = () => {
  return (
    <>
      <Dropdown.Root>
        <Dropdown.Trigger asChild>
          <button aria-label="Navigate Pages" className="focus:outline-none">
            <RowsIcon />
          </button>
        </Dropdown.Trigger>

        <Dropdown.Portal>
          <Dropdown.Content
            sideOffset={2}
            className="w-36 rounded m-4 py-2 border border-gray-800 font-semibold"
          >
            <Dropdown.Item className="flex items-center rounded mx-[1px] pl-4 h-10 text-lg outline-none hover:bg-yellow-400 hover:text-black">
              <Link href="/about">About</Link>
            </Dropdown.Item>
            <Dropdown.Item className="flex items-center rounded mx-[1px] pl-4 h-10 text-lg outline-none hover:bg-yellow-400 hover:text-black">
              <Link href="/etc">Etc.</Link>
            </Dropdown.Item>
          </Dropdown.Content>
        </Dropdown.Portal>
      </Dropdown.Root>
    </>
  );
};

export default HamburgerMenu;
