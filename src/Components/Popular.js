import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Modal from './Modal';

const Popular = () => {
  const [Index, setIndex] = useState(Number)
  const [show, setShow] = useState(false)
  const [data,setData] = useState([]);
  const url = "https://www.googleapis.com/books/v1/volumes?q=coding&download=epub&key=AIzaSyDwq7BvfjoUf08vyX_Tb1SUyjeTOJTYKhg"
  const getData = ()=> {
    axios.get(url).then( response => {
      const data = response.data
      setData(data.items)
    }).catch( error => {
      console.log(error.message);
    })
  }
  useEffect(()=> {
    getData()
  }, [])
  return (
    <div className='popular'>
        <h1>Popular books</h1>
        <div className="books-popular">
          {data.map((item, index)=>(
            
            <div className='card' key={item.id}>
              <img src={item.volumeInfo.imageLinks.thumbnail} alt="poster" />
              <div className="info">
                <h4>title: {item.volumeInfo.title}</h4>
                <p>by: {item.volumeInfo.authors[0]}</p>
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

    </div>
  )
}

export default Popular