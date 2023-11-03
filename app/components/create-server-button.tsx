"use client";

import { FaPlus } from "react-icons/fa";
import { ServerAction } from "./server-navigation-sidebar-item";
import { useModal } from "../hooks/use-modal";
import { ModalComponentKey } from "../models/modal";

export function CreateServerButton() {
  const { onOpen, onClose } = useModal();

  return (
    <ServerAction
      icon={<FaPlus size={14} />}
      onClick={() =>
        onOpen({ modalType: ModalComponentKey.CREATE_SERVER_FORM })
      }
    />
  );
}
