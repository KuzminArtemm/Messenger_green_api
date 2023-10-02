import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

import { IAddMessage, IQueryMessage } from '../../interfaces/interfaces';

export const queryMessage = createAsyncThunk<
  IAddMessage,
  IQueryMessage,
  { rejectValue: string }
>(
  'messageList/queryMessage',
  async function (
    { IdInstance, ApiTokenInstance, chatId, message, phoneNumber },
    { rejectWithValue }
  ) {
    const response = await fetch(
      `https://api.green-api.com/waInstance${IdInstance}/sendMessage/${ApiTokenInstance}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ chatId, message })
      }
    );
    if (!response.ok) {
      return rejectWithValue('Server error');
    }
    const data = await response.json();
    return { idMessage: data.idMessage, message, phoneNumber };
  }
);

type initAddMessageeState = {
  messageList: IAddMessage[];
  loading: boolean;
  error: string | null;
};
const initialState: initAddMessageeState = {
  messageList: [],
  loading: false,
  error: null
};

export const addMessageSlice = createSlice({
  name: 'messageList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(queryMessage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(queryMessage.fulfilled, (state, action) => {
        state.messageList.push(action.payload);
        state.loading = false;
      })
      .addCase(PURGE, () => {
        return initialState;
      });
  }
});

export default addMessageSlice.reducer;
