import {combineReducers} from 'redux';
import userReducer from './user';
import postReducer from './post';
const reducer = combineReducers({
  user: userReducer,
  posts: postReducer,
})
export type RootState = ReturnType<typeof reducer> //함수의 리턴 타입 가져오기

export default reducer;