import { createSlice } from "@reduxjs/toolkit";

interface HomeStateType {
  isCollapsed: boolean;
}

const initialState = {
  isCollapsed: false,
} as HomeStateType;

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    CollapsedAction(state): void {
      state.isCollapsed = !state.isCollapsed;
    },
  },
  extraReducers: () => {},
});

export const { CollapsedAction } = homeSlice.actions;

export default homeSlice.reducer;
