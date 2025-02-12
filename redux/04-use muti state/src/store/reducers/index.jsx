import {combineReducers} from "redux"
import {reducer as counter1} from "./counter1"
import {reducer as counter2} from "./counter2"

let combineReducer = combineReducers({
    counter1,counter2
})

export default combineReducer;
