import React, { useReducer} from 'react'
import githubReducer from './GithubReducers'


const GithubContext = React.createContext()

export const GithubProvider = ({ children }) => {

    const initialState = {
      users: [],
      loading: false
    }

    const [state, disaptch] = useReducer(githubReducer, initialState)

    const fetchUsers = async () => {
        setLoading()

        const response = await fetch('https://api.github.com/users')
        const data = await response.json()
        console.log(data)

        disaptch({
          type: 'GET_USERS',
          paylod: data
        })
      }

      const setLoading = () => disaptch({type: 'SET_LOADING'})

      return (
        <GithubContext.Provider value={{
            users: state.users,
            loading: state.loading,
            fetchUsers
        }}>
            {children}
        </GithubContext.Provider>
      )
 
}

export default GithubContext