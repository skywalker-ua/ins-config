const initialState = {
    color: 'null',
    id: false,
    element: 'facade'
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

    if (action.type === 'CHOOSE_ELEMENT') {
        return {
            ...state,
            element: action.item
        }
    }
    return state;
};

export default reducer;