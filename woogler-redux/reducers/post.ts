import {ADD_POST, AddPostAction} from '../actions/post';

const initialState:string[] = [];

const postReducer = (prevState=initialState, action: AddPostAction) => {
  switch (action.type) {
    case ADD_POST: {
      
    }
    default:
      return prevState;
  }
}

export default postReducer;