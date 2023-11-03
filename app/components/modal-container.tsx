"use client";

import { AnimatePresence } from "framer-motion";
import { useModal } from "../hooks/use-modal";
import { ModalComponentKey } from "../models/modal";
import { CreateServerModal } from "./create-server-modal";

const ModalComponents = {
  [ModalComponentKey.CREATE_SERVER_FORM]: CreateServerModal,
};

export default function ModalContainer() {
  const { modal } = useModal();

  const Modal = modal?.modalType ? ModalComponents[modal.modalType] : null;

  return <AnimatePresence>{Modal && <Modal />}</AnimatePresence>;
}
