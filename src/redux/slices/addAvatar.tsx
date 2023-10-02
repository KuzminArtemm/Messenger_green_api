import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

import { IAddAvatar, IQueryAvatar } from '../../interfaces/interfaces';

export const queryAvatar = createAsyncThunk<
  IAddAvatar,
  IQueryAvatar,
  { rejectValue: string }
>(
  'avatarList/queryAvatar',
  async function (
    { IdInstance, ApiTokenInstance, phoneNumber },
    { rejectWithValue }
  ) {
    const response = await fetch(
      `https://api.green-api.com/waInstance${IdInstance}/getAvatar/${ApiTokenInstance}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ chatId: `${phoneNumber}@c.us` })
      }
    );
    if (!response.ok) {
      return rejectWithValue('Server error');
    }
    const data = await response.json();
    return {
      urlAvatar: data.urlAvatar,
      existsWhatsapp: data.existsWhatsapp,
      phoneNumber
    };
  }
);

type initAddAvatarState = {
  avatarList: IAddAvatar[];
  loading: boolean;
  error: string | null;
};
const initialState: initAddAvatarState = {
  avatarList: [],
  loading: false,
  error: null
};

export const addAvatarSlice = createSlice({
  name: 'avatarList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(queryAvatar.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(queryAvatar.fulfilled, (state, action) => {
        if (action.payload) state.avatarList.push(action.payload);
        state.loading = false;
      })
      .addCase(PURGE, () => {
        return initialState;
      });
  }
});

export default addAvatarSlice.reducer;
