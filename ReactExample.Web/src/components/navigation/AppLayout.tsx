import { Outlet } from "react-router-dom";
import { LogOut, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/DropdownMenu";
import { Avatar, AvatarFallback } from "../ui/Avatar";
import SideBar from "./SideBar";
import ThemeToggle from "../theming/ThemeToggle";

const AppLayout = () => {
  return (
    <div className="flex w-screen items-start">
      <SideBar />
      <div
        id="content"
        className="flex flex-col items-center h-screen w-screen overflow-auto bg-muted/40"
      >
        <div
          id="header"
          className="w-full bg-background flex border-b px-6 h-14 justify-end items-center flex-grow-0 flex-shrink-0 gap-2"
        >
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarFallback>
                  <User className="h-5 w-5 " />
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sign Out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex-grow p-6 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
