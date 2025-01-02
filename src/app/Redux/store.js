'use client'
import { createStore } from "redux";

const { default: apiReducer } = require("./reducers");

const store = createStore(apiReducer)
export default store;