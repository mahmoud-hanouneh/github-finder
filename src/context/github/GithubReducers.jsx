const githubReducer = (state, action) => {
    switch(action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.paylod,
                loading: false
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'GET_USER_REPOS':
            return {
                ...state, 
                repos: action.paylod
            }
        case 'CLEAR_USERS':
            return {
                ...state,
                users: []
            }
        case 'GET_USER':
            return {
                ...state,
                user: action.paylod,
                loading: false
            }
        default:
            return state 
    }
}

export default githubReducer