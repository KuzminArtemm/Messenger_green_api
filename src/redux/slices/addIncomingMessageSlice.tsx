import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

import {
  IAddIncomingMessage,
  IQueryIncomingMessage
} from '../../interfaces/interfaces';

export const queryIncomingMessage = createAsyncThunk<
  IAddIncomingMessage[],
  IQueryIncomingMessage,
  { rejectValue: string }
>(
  'messageIncomingList/queryIncomingMessage',
  async function (
    { IdInstance, ApiTokenInstance, chatId, count, phoneNumber },
    { rejectWithValue }
  ) {
    const response = await fetch(
      `https://api.green-api.com/waInstance${IdInstance}/getChatHistory/${ApiTokenInstance}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ chatId, count })
      }
    );
    if (!response.ok) {
      return rejectWithValue('Server error');
    }
    const data = await response.json();
    console.log('data', data);
    return [{ data: data, count, phoneNumber }];
  }
);

type initAddIncomingMessageeState = {
  messageIncomingList: IAddIncomingMessage[];
  loading: boolean;
  error: string | null;
};
const initialState: initAddIncomingMessageeState = {
  messageIncomingList: [],
  loading: false,
  error: null
};

export const addIncomingMessageSlice = createSlice({
  name: 'messageIncomingList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(queryIncomingMessage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(queryIncomingMessage.fulfilled, (state, action) => {
        state.messageIncomingList = action.payload;
        state.loading = false;
      })
      .addCase(PURGE, () => {
        return initialState;
      });
  }
});

export default addIncomingMessageSlice.reducer;
