import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
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
        <SheetContent className="w-[200px] md:w-[300px]">
          <SheetHeader>
            <VisuallyHidden>
              <SheetTitle>Sidebar Menu</SheetTitle>
            </VisuallyHidden>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="mt-10">
            <ul className="flex flex-col gap-4">
              <Link href={"/"}>
                <li className=" text-base font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200 cursor-pointer">
                  Home
                </li>
              </Link>
              <Link href={"/Pages/about"}>
                <li className="md:block text-base font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200 cursor-pointer">
                  About
                </li>
              </Link>
              <Link href={"/Pages/services"}>
                <li className="text-base font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200">
                  Services
                </li>
              </Link>
              <Link href={"/Pages/courses"}>
                <li className="text-base font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200">
                  Courses
                </li>
              </Link>
              <Link href={"/"}>
                <li className="text-base font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200">
                  Internship
                </li>
              </Link>
              <Link href={"/Pages/contact-us"}>
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
