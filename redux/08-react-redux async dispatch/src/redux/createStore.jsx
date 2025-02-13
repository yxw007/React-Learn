export default function createStore(reducer){
    let listeners = [];
    let state;

    function subscribe(listener){
        listeners.push(listener);
        return ()=>{
            let idx = listeners.indexOf(listener);
            listeners.splice(idx,1);
        }
    }

    function dispatch(action){
        state = reducer(state,action);
        listeners.forEach((listener)=>{
            listener();
        });
    }   

    function getState(){
        return state;
    }

    dispatch({type:"@@Redux/INIT"});

    return {
        subscribe,
        dispatch,
        getState,
    }
}