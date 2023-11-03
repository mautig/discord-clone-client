import clsx from "clsx";
import { FaCompass, FaPlus } from "react-icons/fa";
import { Server } from "../models/server";
import Image from "next/image";

interface ServerNavigationSidebarItemProps {
  server: Server;
}

export function ServerNavigationSidebarItem({
  server,
}: ServerNavigationSidebarItemProps) {
  const classes = clsx(
    `transition-all ease duration-300
      w-[48px] 
      h-[48px] 
      rounded-full
      hover:rounded-[15px]
      mb-[8px]`,
    !server.icon &&
      `
      text-center
      text-[14px]
      text-[#DADFE1]
      font-semibold
      bg-[#313238]
      leading-[48px]
      hover:bg-[#5664F3]
    `
  );

  return (
    <button>
      {server.icon ? (
        <Image className={classes} src={server.icon} alt="channel" />
      ) : (
        <div className={classes}>{server.name.substring(0, 1)}</div>
      )}
    </button>
  );
}

export function MeServerItem() {}

export function ServerAction({
  icon,
  onClick,
}: {
  icon: React.ReactNode;
  onClick?: React.MouseEventHandler;
}) {
  return (
    <button
      onClick={onClick}
      className="
        flex items-center justify-center
        transition-all ease duration-300
        w-[48px] h-[48px] 
        rounded-full hover:rounded-[25%]
        mb-[8px]
        text-[#20A558] font-semibold hover:text-white
        bg-[#313238] hover:bg-[#20A558]"
    >
      {icon}
    </button>
  );
}
