import { combineReducers } from "@reduxjs/toolkit";
import { superheroesReducer } from "./superheroSlice";

const rootReducer = combineReducers({
  superheroes: superheroesReducer,
});

export default rootReducer;
