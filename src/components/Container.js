import React, { useEffect, useState } from 'react'
import Card from './Card'
import './../css/container.css'

function Container({header_icon, header_title, y, sortBy}) {

  const [container, setConatiner] = useState([])

  useEffect(()=>{
    
    if (sortBy === "priority") {
      y = sortedContainerByPriotity(y);
    }else if(sortBy === 'title'){
      y = sortedContainerByTitle(y);
    }
    setConatiner(y);
  },[sortBy])

  function sortedContainerByPriotity(d) {
    
    const sortedContainerByPriotity = [...d].sort((a, b) => b.priority - a.priority);
    console.log(sortedContainerByPriotity);
    return sortedContainerByPriotity;
  }
   
  
  function sortedContainerByTitle(d) {
    
    const sortedContainerByTitle = [...d].sort((a, b) =>(a, b) => (a.title.localeCompare(b.title)));
    console.log(sortedContainerByTitle);
    return sortedContainerByTitle;
  }

  return (
    <div className='container'>
      <div className='container_header'>
           <div className='header_left'>
                <div className='circle'>
                <h3 >⚫</h3>
                </div>
                {/* <img className='img' src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/dots-horizontal-512.png" alt="IC" /> */}
                <p>{header_title}</p>
                <p>{container.length}</p>
            </div>
            <div className='header_right'>
                <h3>+</h3>
                <p>...</p>
            </div>
      </div>

      <div className='cards'>
       {
          container.map((item, index) =>(
            <Card id ={item.id} title={item.title} tag={item.tag} />
          ))
       }
      </div>
    </div>
  )
}

export default Container
