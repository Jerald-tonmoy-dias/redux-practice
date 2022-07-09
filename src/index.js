import store  from "./store";
import * as actions from './actions';

store.subscribe(()=> {
    console.log("store is changed!!!");
});

store.dispatch(actions.bugAdded("bug added One"));
store.dispatch(actions.bugAdded("bug added Two"));
store.dispatch(actions.bugAdded("bug added Three"));
store.dispatch(actions.bugResolved(1));

console.log(store.getState());