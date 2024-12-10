import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
// import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <FontAwesomeIcon icon={faBars} className="text-2xl" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            {/* <VisuallyHidden>
              <SheetTitle>Sidebar Menu</SheetTitle>
            </VisuallyHidden> */}
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="mt-10">
            <ul>
              <Link href={"/"}>
                <li className=" text-base font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200 cursor-pointer">
                  Home
                </li>
              </Link>
              <Link href={"/about"}>
                <li className="md:block text-base font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200 cursor-pointer">
                  About
                </li>
              </Link>
              <Link href={"/service"}>
                <li className="text-base font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200">
                  Services
                </li>
              </Link>
              <Link href={"/blog"}>
                <li className="text-base font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200">
                  Blog
                </li>
              </Link>
              <Link href={"/contact"}>
                <li className="text-base font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200">
                  Contact
                </li>
              </Link>
              
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidebar;
