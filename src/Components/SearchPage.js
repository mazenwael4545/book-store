import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header';
import axios from 'axios';
import Modal from './Modal';
import Footer from './Footer';

const SearchPage = () => {
  const location = useLocation();
  const [data, setData]= useState([]);
  const [Index, setIndex] = useState(Number)
  const [show, setShow] = useState(false)
  let searchValue = location.state.searchValue;
  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&download=epub&key=AIzaSyDwq7BvfjoUf08vyX_Tb1SUyjeTOJTYKhg`;

  const getData = function(){
    axios.get(url).then(response=> {
      const data = response.data;
      setData(data.items)
    }).catch(error=> console.log(error.message))
  }
  useEffect(()=> {
    getData()
  },[])
  
  return (
    <div className="search">
      <Header />
      <h1 style={{margin: "30px"}}>results for "{searchValue}"</h1>
      <div className="books-popular">
          {data.map((item, index)=>(
            
            <div className='card' key={item.id}>
              <img src={item.volumeInfo.imageLinks.thumbnail} alt="poster" />
              <div className="info">
                <h4>title: {item.volumeInfo.title}</h4>
                <p>by: {item.volumeInfo.authors}</p>
              </div>
              <div className="more-btn">
                <button onClick={()=>{setIndex(index);setShow(true)}}>read more</button>
              </div>
            </div>
            ))}
          
        </div>
        <div style={{position: "relative"}}>
          { show === true ?
              <Modal poster={data[Index].volumeInfo.imageLinks.thumbnail} title={data[Index].volumeInfo.title} author={data[Index].volumeInfo.authors[0]} description={data[Index].volumeInfo.description} previewLink={data[Index].volumeInfo.previewLink} setshow={setShow}/>
          : null }
        </div>
        <Footer />
    </div>
  )
}

export default SearchPage