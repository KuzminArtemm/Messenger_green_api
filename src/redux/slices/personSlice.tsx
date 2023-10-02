import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

import { IPerson, IQuerySignIn } from '../../interfaces/interfaces';

export const queryPerson = createAsyncThunk<
  IPerson[],
  IQuerySignIn,
  { rejectValue: string }
>(
  'person/queryPerson',
  async ({ IdInstance, ApiTokenInstance }, { rejectWithValue }) => {
    const response = await fetch(
      `https://api.green-api.com/waInstance${IdInstance}/getStateInstance/${ApiTokenInstance}`
    );
    if (!response.ok) return rejectWithValue('Server error');

    const data = await response.json();
    return [
      {
        IdInstance: IdInstance,
        ApiTokenInstance: ApiTokenInstance,
        isAuthorized: data.stateInstance
      }
    ];
  }
);

type initPersonState = {
  personList: IPerson[];
  loading: boolean;
  error: string | null;
};
export const initialState: initPersonState = {
  personList: [],
  loading: false,
  error: null
};

export const personSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(queryPerson.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(queryPerson.fulfilled, (state, action) => {
        state.personList = action.payload;
        state.loading = false;
      })
      .addCase(PURGE, () => {
        return initialState;
      });
  }
});

export default personSlice.reducer;
