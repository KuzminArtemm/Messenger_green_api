import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

import { IAddPhone } from '../../interfaces/interfaces';

type initAddPhoneState = {
  phoneList: IAddPhone[];
  loading: boolean;
  error: string | null;
};
const initialState: initAddPhoneState = {
  phoneList: [],
  loading: false,
  error: null
};

export const addPhoneSlice = createSlice({
  name: 'phoneList',
  initialState,
  reducers: {
    addPhoneReducer: (state, action: PayloadAction<IAddPhone>) => {
      if (action.payload) state.phoneList.push(action.payload);
    },
    addActive: (state, action: PayloadAction<string>) => {
      if (action.payload) {
        let arr_2;
        let obj: IAddPhone | undefined = state.phoneList.find(
          (el) => el.phoneNumber === action.payload
        );
        if (obj) {
          if (!obj.active) {
            obj.active = true;
            arr_2 = state.phoneList.map((el) => {
              if (el.phoneNumber !== action.payload) {
                el.active = false;
              }
              return el;
            });
          } else {
            obj.active = false;
            arr_2 = state.phoneList.map((el) => {
              if (el.phoneNumber !== action.payload) {
                el.active = false;
              }
              return el;
            });
          }
          state.phoneList = arr_2.slice();
        }
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => {
      return initialState;
    });
  }
});

export const { addPhoneReducer, addActive } = addPhoneSlice.actions;
export default addPhoneSlice.reducer;
