import React, { useState } from 'react'
import BackBtn from './BackBtn'
import { useNavigate } from 'react-router-dom';
import "../Styles/ModalConf.css"
import { useDispatch, useSelector } from 'react-redux';
import { createAccount } from '../Helpers/AuthRedux';

const SignUp = () => {
  const [user, setUser] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const password = useSelector(state=>state.user.password)
  let message = "";

  const sendData = (e)=>{
    e.preventDefault();
    let first = e.target[0].value;
    let last = e.target[1].value;
    let email = e.target[2].value;
    let pass = e.target[3].value;

    if(first && last && email && pass){
      setUser({
        firstname: first,
        lastname: last,
        email: email,
        password: pass
      })
      setOpenModal(true);
    }else{
      message = "please, fill the inputs"
      alert(message);
    }
  }

  const handleSubmit = ()=>{
    dispatch(createAccount(user))
    navigate("/profile")
  }

  return (
    <div className='signup'>
      {password === undefined?(
      <div>
        <BackBtn />
        <div className="formContainer">
            <h1>Sign Up</h1>
            <form onSubmit={sendData}>
              <input type="text" placeholder='First name...' />
              <input type="text" placeholder='Last name...' />
              <input type="email" placeholder='Email...' />
              <input type="password" placeholder='password..' />
              <button type='submit'>Signup</button>
            </form>
            {openModal === true && message === "" ? (
              <div className='modalBackground' onClick={()=>setOpenModal(false)}>
              <div className="body">
                <h2>Are you sure you want to sign up ?</h2>
                <div className="btn">
                  <button onClick={()=> setOpenModal(false)} style={{margin: "10px"}}>cancel</button>
                  <button onClick={handleSubmit}>confirm</button>
                </div>
              </div>
            </div>
            ): null}
        </div>
      </div>
      ):(
        <div>
          <h1>you don't need to sign up</h1>
          <div className="buttons">
            <button onClick={()=> navigate("/profile")}>go to profile</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SignUp