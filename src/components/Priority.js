import React, { useEffect, useState } from 'react'
import Container from './Container'
import axios from 'axios';

function Priority({sortBy}) {
    const [x, setX] =  useState({})

    const priorityName = {
      4 : "Urgent",
      3 : "High", 
      2 : "Medium",
      1 : "Low",
      0 : "No priority"
    }

//     4 - Urgent

// 3 - High

// 2 - Medium

// 1 - Low

// 0 - No priority
    

    const getData = async () =>{
        try {
            const d = await axios.get(process.env.REACT_APP_API_URI);

            const tickets = d.data.tickets;
            const users = d.data.users;

            const containers = {};

            // for(let i=0; i<users.length; i++){
            //     userid_name[users[i].id] = users[i].name;
            // }


            for(let i=0; i<tickets.length; i++){
                let priority = tickets[i].priority;
                if (!containers[priority]) {
                    containers[priority] = [];
                }
                containers[priority].push(tickets[i]);
            }

            await setX(containers);

        } catch (error) {
            console.log(error);
        }



    }

    // if(x.length)
    console.log(x);

    useEffect(()=>{
        getData();
    },[])

  return (
    <div>
      <div className='stacks'>
       
      {Object.keys(x).map((key) => (
        <Container header_title = {priorityName[key]} y = {x[key]} sortBy={sortBy} />
      ))}
       
      </div>
    </div>
  )
}

export default Priority
