export enum ModalComponentKey {
  CREATE_SERVER_FORM = "CREATE_SERVER_FORM",
}

export interface CreateServerModalType {
  modalType: typeof ModalComponentKey.CREATE_SERVER_FORM;
  modalProps?: unknown;
}

export type ModalType = CreateServerModalType;
