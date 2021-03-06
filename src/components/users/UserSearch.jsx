import React, { useState, useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'
import GithubContext from '../../context/github/GithubContext'
import { searchUsers } from '../../context/github/GithubActions'
function UserSearch() {
   
  const {users, dispatch}= useContext(GithubContext)
  const {setAlert} = useContext(AlertContext)

  const [text, setText] = useState('')
  
  const handleChange = (e) => setText(e.target.value)
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if(text === '') {
        setAlert('please dont leave that empty', 'error')
    } else {
        dispatch({type: 'SET_LOADING'})
        setText('')
        const items = await searchUsers(text)
        dispatch({type: 'GET_USERS', paylod: items})
    }
  }  
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
        <div>
            <form onSubmit={handleSubmit} className='form-control'>
                <div className="relative">
                    <input 
                        type="text" 
                        className="w-full pr-40 bg-gray-200 input input-lg text-black"
                        placeholder="Search"  
                        onChange={handleChange}
                        value={text}  
                    />
                    <button 
                    type="Submit" 
                    className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'>
                        Go
                    </button>
                </div>
            </form>
        </div>
        {users.length > 0 && (
            <div>
                <button onClick={() => dispatch({type: 'CLEAR_USERS'})} className='btn btn-ghost btn-lg'>Clear</button>
            </div>
        )}
       
    </div>
  )
}

export default UserSearch