import {  createStore } from "redux";
import { countReduser } from "./reducer";


export const store=createStore(countReduser)