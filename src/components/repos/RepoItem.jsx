import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'
import React from 'react'
import propTypes from 'prop-types'
function RepoItem({ repo }) {
    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count,
    } = repo
  return (
    <div className='mb-2 rounded-md card bg-gray-800 g:bg-gray-900'>
        <div className='card-body'>
           <h3 className='mb-2 text-xl font-semibold'>
               <a href={html_url}>
                   <FaLink className='inline mr-1' /> {name}
               </a>
               <p className='mb-3'>{description}</p>
               <div className='mr-2 badge badge-info badge-lg'>
                    <FaEye className='mr-2' /> {watchers_count}
               </div>

               <div className='mr-2 badge badge-success badge-lg'>
                    <FaStar className='mr-2' /> {stargazers_count}
               </div>

               <div className='mr-2 badge badge-error badge-lg'>
                    <FaInfo className='mr-2' /> {open_issues}
               </div>

               <div className='mr-2 badge badge-warning badge-lg'>
                    <FaUtensils className='mr-2' /> {forks}
               </div>
           </h3>
        </div>
    </div>
  )
}
RepoItem.propTypes = {
    repo: propTypes.object.isRequired,
}
export default RepoItem