export function addOne (n) {
    return n + 1;
}

export function ListReducer (state, action) {
    switch (action.type) {
        case "add":
            return [...state, action.data];
        case "update":
            return state.with(action.index, action.data);
        case "remove":
            return state.toSpliced(state.length - 1, 1);
        case "removeByIndex":
            return state.toSpliced(action.index, 1);
        default:
            return state;
    }
}
