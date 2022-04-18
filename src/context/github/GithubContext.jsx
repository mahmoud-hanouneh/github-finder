import { createContext, useReducer } from 'react'
import { useParams } from 'react-router-dom'
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

    //Clear Users 
    const clearUsers = () => {
        dispatch({
            type: 'CLEAR_USERS'
        })
    }

    // Search users (testing purposes)
    const fetchUsers = async (text) => {
        setLoading()

        const params = new URLSearchParams({
            q: text
        })

        const response = await fetch(`https://api.github.com/search/users?${params}`)
        const {items} = await response.json()
        console.log(items)

        dispatch({
            type: 'GET_USERS',
            paylod: items
        })

      }

      const getUser = async (login) => {
        setLoading()
       
        const response = await fetch(`https://api.github.com/users/${login}`)
        
        const data = await response.json()
        dispatch({
             type: 'GET_USER',
             paylod: data,
             loading: false
        })
        
       }
      // get user repos
      const getRepos = async (login) => {
          setLoading()
        //   const fetchURL = `https://api.github.com/users/${login}/repos`
        //   console.log(fetchURL)
          const response = await fetch(`https://api.github.com/users/${login}/repos`)
          const data = await response.json()

          dispatch({
              type: 'GET_USER_REPOS',
              paylod: data,
              loading: false
          })
      }
      //set loading
      const setLoading = () => {
          dispatch({
              type: 'SET_LOADING'
          })
      }
      
      return <GithubContext.Provider value={{
            users: state.users,
            user: state.user,
            loading: state.loading,
            fetchUsers,
            clearUsers,
            getUser,
            getRepos,
            repos: state.repos
        }}>
            {children}
        </GithubContext.Provider>
      
}

export default GithubContext