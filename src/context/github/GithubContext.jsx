import { createContext, useState } from 'react'

const GithubContext = createContext()



export const GithubProvider = ({ children }) => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchUsers = async () => {
        const response = await fetch('https://api.github.com/users')
        const data = await response.json()
        console.log(data)
        setUsers(data)
        setLoading(prev => !prev)
      }

      return (
        <GithubContext.Provider value={{
            users,
            loading,
            fetchUsers
        }}>
            {children}
        </GithubContext.Provider>
      )
 
}

export default GithubContext