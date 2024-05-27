import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

const Modal = ({poster,title,description,author, previewLink, setshow}) => {
  return (
        <div onClick={()=> setshow(false)} className="modal-background">
            <div className="modal-container">
                <button onClick={()=> setshow(false)} className='close'>
                    <i className='fa-solid fa-close'></i>
                </button>
                <div className="poster">
                    <img src={poster} alt="book poster" />
                </div>
                <div className="info">
                    <div className="title">
                        <h1>{title}</h1>
                        <span>by: {author}</span>
                    </div>
                    <div className="description">
                        description: <br/>{description}
                    </div>
                    <button id='preview'>
                        <Link to={previewLink} target='_blank'>preview</Link>
                    </button>
                </div>
            </div>
        </div>
  )
}

export default Modal