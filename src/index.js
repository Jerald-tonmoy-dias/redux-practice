import store from "./store";

import *  as action from './actions';

const unsubscribe = store.subscribe(()=> {
    console.log('store changed!!!',store.getState());
});

store.dispatch(action.bugAdded('bug one'))
store.dispatch(action.bugAdded('bug two'))
store.dispatch(action.bugAdded('bug three'))

 unsubscribe();

store.dispatch(action.bugAdded('bug fice'))

store.dispatch(action.bugRemoved(3))
store.dispatch(action.bugResolved(2))


console.log(store.getState());