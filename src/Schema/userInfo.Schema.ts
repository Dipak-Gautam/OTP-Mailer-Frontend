import { IEmailConfig } from "./emailConfig.Schema";

export interface IUserInfo {
  email: string;
  name: string;
  _id: string;
  emailConfig: IEmailConfig;
}
