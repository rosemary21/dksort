import { ApiURLType } from "./index.d";
import { requestType } from "./_variables";

export const apiVersion = "/api/v1",
  baseURL = `https://javapaas-171468-0.cloudclusters.net${apiVersion}`,
  loginApi: ApiURLType = {
    method: requestType.post,
    url: "/login/customer"
  },
  signupApi: ApiURLType = {
    method: requestType.post,
    url: "/registration/send-otp"
  },
  verifyRegistrationOTPApi: ApiURLType = {
    method: requestType.post,
    url: "/registration/verify-otp"
  },
  addBVNApi: ApiURLType = {
    method: requestType.post,
    url: "/registration/add-bvn"
  },
  setPinApi: ApiURLType = {
    method: requestType.post,
    url: "/registration/set-pin"
  },
  changePasswordApi: ApiURLType = {
    method: requestType.put,
    url: "/forgot-password/reset-password"
  },
  sendChangePasswordOTPApi: ApiURLType = {
    method: requestType.post,
    url: "/forgot-password/send-otp"
  },
  verifyChangePasswordOTPApi: ApiURLType = {
    method: requestType.post,
    url: "/forgot-password/verify-otp"
  };
