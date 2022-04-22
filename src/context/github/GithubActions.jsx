import axios from 'axios'

export const searchUsers = async (text) => {
    
  const params = new URLSearchParams({
        q: text
    })
    const response = await axios.get(`https://api.github.com/search/users?${params}`)
    return response.data.items
}

export const getUserAndRepos = async (login) => {

  const [user, repos] = await Promise.all([
    axios.get(`https://api.github.com/users/${login}`),
    axios.get(`https://api.github.com/users/${login}/repos`)
  ])
 
  return { user: user.data, repos: repos.data }
}