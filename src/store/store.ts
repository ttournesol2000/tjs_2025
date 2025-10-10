import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentReducer from "./current";
import resourcesReducers from "./resources";
import { loadRessources } from "./asyncCaller";

const store = configureStore({
        reducer: combineReducers( { current: currentReducer, resources: resourcesReducers})
    }
);

export default store;

console.log('init state:' + JSON.stringify(store.getState()));

//store.subscribe(()=>{console.log("subscription:" + JSON.stringify(store.getState()))});

store.dispatch(loadRessources());


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
