import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
  emotion: [],
  activity: 0,
}

export const emotionSlice = createSlice({
  name: "emotion",
  initialState: { value: initialStateValue},
  reducers: {
    selectEmotion: (state, action) => {
      state.value.emotion = action.payload;
    },
    selectActivity: (state, action) => {
      state.value.activity = action.payload;
    },
  },
});

export const { selectEmotion, selectActivity } = emotionSlice.actions;

export default emotionSlice.reducer;