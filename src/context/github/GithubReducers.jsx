const githubReducer = (state, action) => {
    switch(action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'GET_USERS':
            return {
                ...state,
                users: action.paylod,
                loading: false
            }
        case 'GET_USER_AND_REPOS':
            return {
                ...state,
                user: action.paylod.user,
                repos: action.paylod.repos,
                loading: false
            }
        case 'CLEAR_USERS':
            return {
                ...state,
                users: []
            }
        default:
            return state 
    }
}

export default githubReducer