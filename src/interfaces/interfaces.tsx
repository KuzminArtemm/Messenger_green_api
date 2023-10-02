export interface IPerson {
  IdInstance: string;
  ApiTokenInstance: string;
  isAuthorized: string;
}

export interface IAddPhone {
  id: string;
  phoneNumber: string;
  active: boolean;
}

export interface IAddMessage {
  idMessage: string;
  message: string;
  phoneNumber: string | undefined;
}

export interface IQuerySignIn {
  IdInstance: string;
  ApiTokenInstance: string;
}

export interface IQueryMessage {
  IdInstance: string;
  ApiTokenInstance: string;
  chatId: string;
  message: string;
  phoneNumber: string | undefined;
}
export interface IAddAvatar {
  urlAvatar: string;
  existsWhatsapp: boolean;
  phoneNumber: string | undefined;
}
export interface IQueryAvatar {
  IdInstance: string;
  ApiTokenInstance: string;
  phoneNumber: string | undefined;
}
export interface IQueryIncomingMessage {
  IdInstance: string;
  ApiTokenInstance: string;
  chatId: string;
  count: number;
  phoneNumber: string | undefined;
}
export interface IAddIncomingMessage {
  data: string;
  count: number;
  phoneNumber: string | undefined;
}
