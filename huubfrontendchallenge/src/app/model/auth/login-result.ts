export class LoginResult {
  message: string;
  details: string;
  data: LoginResultData;
  timestamp: Date;
  request_identifier: string;
}

export interface LoginResultData {
  jwt: string;
}

