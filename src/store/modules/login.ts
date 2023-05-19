import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { requestFrom, ResponseLoginInfo } from "@/pages/login/interface";
import { login } from "@/services/login";
import { setTokenInfo, getTokenInfo } from "@/utils/storage";

const initialState: ResponseLoginInfo = {
  access_token: getTokenInfo().access_token || "",
  refresh_token: getTokenInfo().refresh_token || "",
  expiresIn: getTokenInfo().expiresIn || 0,
};

// 登录
export const loginAction = createAsyncThunk(
  "login/token",
  async (data: requestFrom) => {
    const res = await login(data);
    return res;
  },
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder // 登录实例
      .addCase(loginAction.fulfilled, (state, action) => {
        const { payload } = action;
        console.log(payload.access_token);

        state.access_token = payload.access_token;
        state.refresh_token = payload.refresh_token;
        state.expiresIn = payload.expiresIn;
        setTokenInfo(payload as ResponseLoginInfo);
      });
  },
});

export default loginSlice.reducer;
