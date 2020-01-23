const initialState = {
    color: 'null',
    id: false
}

const reducer = (state = initialState, action) => {
    if (action.type === 'ADD_COLOR') {
        return {
            ...state,
            color: action.value
        }
    }

    if (action.type === 'ADD_ID') {
        return {
            ...state,
            id: action.number
        }
    }
    return state;
};

export default reducer;