import { PUT, TAKE } from "./effect-types";

export function take(actionType){
    return {
        type:TAKE,actionType
    }
}

export function put(action){
    return {
        type:PUT,action
    }
}