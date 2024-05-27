import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const password = useSelector(state=> state.user.password)
  return (
    <div className='home'>
        <div className="container">
            <h1>welcome to your Comfort Zone</h1>
            {password === undefined? (
              <div className="buttons">
                <button onClick={()=>navigate("/signup")}>Create account</button>
              </div>
            ):(
              <div className="buttons">
                <button onClick={()=>navigate("/profile")}>go to profile</button>
              </div>
            )}
        </div>
    </div>
  )
}

export default Home;