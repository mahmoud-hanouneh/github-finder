const alertReducer = (state, action) => {
    switch(action.type) {
        case 'SET_ALERT':
            return action.paylod
        case 'REMOVE_ALERT':
            return null
        default:
            return state
    }
}

export default alertReducer