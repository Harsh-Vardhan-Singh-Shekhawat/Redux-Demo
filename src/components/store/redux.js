import {createStore} from 'redux'
const initialState = {
    value: 0,
    showCounter: true
}
const reducer = (state = initialState, action) => {
    if(action.type === 'increase'){
        return {
            value : state.value + 1,
            showCounter:state.showCounter
        }
    }
    if(action.type === 'decrease'){
        return {
            value: state.value - 1,
            showCounter:state.showCounter
        }
    }
    if(action.type === 'toggle'){
        return{
            value: state.value,
            showCounter: !state.showCounter
        }
    }

    return state;
}
const store = createStore(reducer);

export default store;
// store.getData();
// store.subscribe();