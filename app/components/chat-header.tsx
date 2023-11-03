import {
  FaBell,
  FaHashtag,
  FaInbox,
  FaThumbtack,
  FaUsers,
} from "react-icons/fa";

export function ChatHeader() {
  return (
    <div
      className="h-[48px] min-h-[48px] bg-[#313238] 
        flex justify-between items-center px-3 
        border-b-[1px] border-[#1F1E20] text-[#b5b9c0]"
    >
      <div className="flex items-center">
        <FaHashtag size={18} />
        <span className="ml-2 font-bold">Channel 1</span>
      </div>
      <div className="flex items-center">
        <div className="mx-2 cursor-pointer">
          <FaBell size={18} />
        </div>
        <div className="mx-2 cursor-pointer">
          <FaThumbtack size={18} />
        </div>
        <div className="mx-2 cursor-pointer">
          <FaUsers size={18} />
        </div>
        <div className="mx-2">
          <input
            className="rounded px-2 bg-[#1F1E22] font-medium"
            placeholder="Search"
          />
        </div>
        <div className="mx-2 cursor-pointer">
          <FaInbox size={18} />
        </div>
      </div>
    </div>
  );
}
