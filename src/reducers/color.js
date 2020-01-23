const color = ( state = [], action) => {
    switch(action.type) {
        case 'ADD_COLOR': 
            return [
                ...state,
                {
                    color: action.color,
                }
            ]
        default: 
            return state
    }
}