import React, { useState } from 'react';
import Header from './Header';
import { connect, useDispatch } from 'react-redux';
import { logout } from '../Helpers/AuthRedux';
import { useNavigate } from 'react-router-dom';
import profileImage from "../assets/profileImage.png";
import "../Styles/ProfileStyles.css";

const Profile = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [image,setImage] = useState("");
  const [modal , openModal] = useState(false);

  const handleLogout = ()=> {
    dispatch(logout());
    navigate("/");
  }

  const handleImageSelect = (event) => {
    const selectedFile = event.target.files[0]
    const imageUrl = URL.createObjectURL(selectedFile);
    setImage(imageUrl)
  };

  return (
    <div>
      <Header />
      {props.password === undefined ? (
        <h1>protected page, make account first</h1>
      ) : (
        <div style={{zIndex: 1}}>
          <div className="profileOptions">
            <div className="img" >
              <input type="file" id='filer' onChange={handleImageSelect} style={{display: "none"}} />
              <label htmlFor="filer" className='label'>
                <i className='fa-solid fa-pencil'></i>
              </label>
              <img src={image !== ""? image:profileImage} alt="profileImage" />
            </div>
            <h1>name: {props.firstname}</h1>
          </div>
          <button onClick={()=>openModal(true)} className='logout'><i className='fa-solid fa-sign-out'></i> logout</button>
          {/*modal*/}
          {modal === true? (
           <div className='modal-background' onClick={()=> openModal(false)}>
            <div className="modal">
              <h2>Are you sure you want to logout ?</h2>
              <div className="buttons">
                <button onClick={()=> openModal(false)}>cancel</button>
                <button onClick={handleLogout}>confirm</button>
              </div>
            </div>
           </div> 
          ):null}
        </div>
      )}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    firstname: state.user.firstname,
    lastname: state.user.lastname,
    email: state.user.email,
    password: state.user.password,
    photo: state.user.profilePhoto
  }
}

export default connect(mapStateToProps)(Profile);
