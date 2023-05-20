import instance, { ResDataType } from "./config";
import { requestFrom } from "@/pages/login/interface";

export function login(params: requestFrom): Promise<ResDataType> {
  return instance({
    url: "/api/auth/login",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(params),
  });
}
