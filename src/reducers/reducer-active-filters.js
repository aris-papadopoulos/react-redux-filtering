export default function(state=[], action) {
    switch(action.type) {
        case "FILTER_CHANGE":
            let f = action['payload'];
            let i = state.indexOf(f);
            if (i<0) {
                state.push(f)
            } else {
                state.splice(i, 1)
            }
            return state;
            break;
        default:
            return []
    }
}
