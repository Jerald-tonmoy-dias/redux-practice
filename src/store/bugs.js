// ducks pattern //

// action types
 const BUG_ADDED = "bugAdded";
 const BUG_REMOVED = 'bugRemoved';
 const BUG_RESOLVED = 'bugResolved';

//  actions (action should be exported)
export function bugAdded(des) {
    return {
         type: BUG_ADDED,
         payload: {
             des : des//this are same pattern
         }
    }
 }
 export function bugRemoved(id) {
    return {
     type: BUG_REMOVED,
     payload: {
         id// this are same pattern
     }
 }
 }
 export function bugResolved(id) {
    return {
     type: BUG_RESOLVED,
     payload: {
         id:id// this are same pattern
     }
 }
 }

//  reducers (reducer should be exported as default)
let lastId = 0;

export default function reducer(state = [], action) {
    switch (action.type) {
        
        case BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    des: action.payload.des,
                    resolved: false
                }
            ];

        case BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id);

        case BUG_RESOLVED:
            return state.map(bug => bug.id !== action.payload.id ? bug : { ...bug, resolved: true });

        default:
            return state;
    }
}