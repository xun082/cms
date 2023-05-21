export interface requestFrom {
  username: string;
  password: string;
}

export interface resultLogin {
  token: string;
}
export interface ResponseLoginInfo {
  access_token: string;
  refresh_token: string;
  expiresIn: number;
}
