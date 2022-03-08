import { configureStore } from '@reduxjs/toolkit';

const counterReducer = (state = 1, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    
    default:
      return state;
  }
};


export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});


export default counterReducer;