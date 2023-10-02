import { combineReducers } from 'redux';

import addAvatarSliceReducer from '../slices/addAvatar';
import addIncomingMessageSlice from '../slices/addIncomingMessageSlice';
import addMessageSlice from '../slices/addMessageSlice';
import addPhoneReducer from '../slices/addPhoneSlice';
import personSlice from '../slices/personSlice';

export const rootReducer = combineReducers({
  person: personSlice,
  phoneList: addPhoneReducer,
  messageList: addMessageSlice,
  avatarList: addAvatarSliceReducer,
  messageIncomingList: addIncomingMessageSlice
});
