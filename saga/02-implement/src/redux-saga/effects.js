import { FORK, PUT, TAKE, CANCEL, CALL } from "./effect-types";

export function take(actionType) {
    return {
        type: TAKE,
        actionType,
    };
}

export function put(action) {
    return {
        type: PUT,
        action,
    };
}

export function fork(action) {
    return {
        type: FORK,
        action,
    };
}

export function cancel(task) {
    return { type: CANCEL, task };
}

export function call(fn, ...args) {
    return { type: CALL, fn, args };
}

const delayFn = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function delay(...args) {
    return call(delayFn, ...args);
}