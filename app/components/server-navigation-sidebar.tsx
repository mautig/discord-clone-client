import { FaCompass, FaPlus } from "react-icons/fa";
import { Server } from "../models/server";
import {
  ServerAction,
  ServerNavigationSidebarItem,
} from "./server-navigation-sidebar-item";

export function ServerNavigationSidebar() {
  const servers: Server[] = [
    {
      id: "server-1",
      name: "Server 1",
    },
    {
      id: "server-2",
      name: "Server 2",
    },
    {
      id: "server-3",
      name: "Server 3",
    },
    {
      id: "server-3",
      name: "Server 3",
    },
  ];

  return (
    <div className="w-[72px] flex flex-col items-center bg-[#1F1E22] pt-4 ">
      {servers.map((server) => (
        <ServerNavigationSidebarItem key={server.id} server={server} />
      ))}
      <ServerAction icon={<FaPlus size={14} />} />
      <ServerAction icon={<FaCompass size={14} />} />
    </div>
  );
}
