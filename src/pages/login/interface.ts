export interface requestFrom {
  username: string;
  password: string;
  remember: boolean;
}

export interface resultLogin {
  token: string;
}
export interface ResponseLoginInfo {
  access_token: string;
  refresh_token: string;
  expiresIn: number;
}
