// import {combineReducers} from "redux"
import { combineReducers } from "../../redux";
import {reducer as counter1} from "./counter1"
import {reducer as counter2} from "./counter2"

let combineReducer = combineReducers({
    counter1,counter2
})

/* 
combineReducer = {
    counter1:{number:0}
    counter2:{number:0}
}

*/

export default combineReducer;
