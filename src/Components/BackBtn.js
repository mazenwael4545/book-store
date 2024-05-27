import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackBtn = () => {
    const navigate = useNavigate()
  return (
    <div className='back-btn' onClick={()=>navigate('/')}>
        <i className='fa-solid fa-arrow-left'></i>
    </div>
  )
}

export default BackBtn