const initialState = {
    color: 'null'
}

const reducer = (state = initialState, action) => {
    if (action.type === 'ADD_COLOR') {
        return {
            ...state,
            color: action.value
        }
    }
    return state;
};

export default reducer;