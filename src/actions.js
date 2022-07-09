import *  as actions from './actionTypes';

export function bugAdded(des) {
   return {
        type: actions.BUG_ADDED,
        payload: {
            des : des//this are same pattern
        }
   }
}
export function bugRemoved(id) {
   return {
    type: actions.BUG_REMOVED,
    payload: {
        id// this are same pattern
    }
}
}
export function bugResolved(id) {
   return {
    type: actions.BUG_RESOLVED,
    payload: {
        id:id// this are same pattern
    }
}
}