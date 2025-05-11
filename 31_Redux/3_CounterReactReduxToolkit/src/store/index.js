
import { configureStore, createSlice } from "@reduxjs/toolkit";

const INITIAL_VALUE = {
    counter: 0,
    privacy:false
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state, action) => {
      
    },
    decrement: (state, action) => {
      
    },
    add: (state, action) => {
      
    },
    
  }
})

const counterReducer = (store = INITIAL_VALUE, action) => {
  if (action.type === "INCREMENT") {
      return ({ counter: store.counter + 1,privacy:store.privacy });
    }
    else if (action.type === "DECREMENT") {
      return ({ counter: store.counter - 1 , privacy:store.privacy});

    }
  else if (action.type === "ADD") {
      return ({counter: store.counter + Number(action.payload.num), privacy:store.privacy})
    }
  else if (action.type === "PRIVACY_TOGGLE") {
      return({privacy:!store.privacy , counter:store.counter})
    }
    return store
    
};
const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer
}});

export default counterStore;
