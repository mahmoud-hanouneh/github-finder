import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



const UserItem = ({ user: {avatar_url, login} }) => {
  return (
    <div className='card shadow-md compact bg-base-100'>
        <div className='flex-row items-center space-x-4 card-body'>

          <div>
            <div className="avatar">
              <div className="rounded-fill shadow w-14 h-14">
                <img src={avatar_url} alt="Profile" />
              </div>
            </div>
          </div>

          <div>
            <h2 className='card-title'>{login}</h2>
            <Link
              className='text-base-content text-opacity-40'
              to={`https://api.github.com/users${login}`}
            >
              Visit Profile
            </Link>
          </div>
          
        </div>
    </div>
  )
}

UserItem.propType = {
  user: PropTypes.object.isRequired,
}
export default UserItem