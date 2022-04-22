import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducers'

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {

    const initialState = {
        users: [],
        user: {},
        loading: false,
        repos: []
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    return <GithubContext.Provider value={{
        ...state,
        dispatch,
            
    }}>
        {children}
    </GithubContext.Provider>
      
}

export default GithubContext