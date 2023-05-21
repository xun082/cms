import instance from "@/utils/http";
import { requestFrom } from "@/pages/login/interface";

export function login(params: requestFrom) {
  return instance.request({
    url: "/login",
    method: "post",
    data: params,
  });
}
