import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate()

  const handleSearch = () => {
    if(value){
      navigate("/search", {
        state: {
          searchValue: value,
        }
      })
    }else{
      alert("no value")
    }
  }
  
  const pressEnter = (e)=>{
    if(e.key === "Enter"){
      handleSearch()
    }
  }

  return (
    <div className='header'>
      <Link to='/'>
        <div className="logo">
            <i className='fa-solid fa-book'></i>
            <h2>Book Store</h2>
        </div>
      </Link>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "10px"
      }}>
        <div className="searchBar">
            <div className="input">
                <input type="text" placeholder='Search here...' value={value} onChange={(e)=> setValue(e.target.value)} onKeyUp={pressEnter}/>
                <i className='fa-solid fa-magnifying-glass' onClick={handleSearch}></i>
            </div>
        </div>
        <div className="burger" style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "0.4s",
          cursor: "pointer"
        }}>
        </div>
      </div>
    </div>
  )
}

export default Header