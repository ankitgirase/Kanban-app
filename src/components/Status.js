import React, { useEffect, useState } from "react";
import Container from "./Container";
import axios from "axios";

function Status({ sortBy }) {
  // const userid_name = {};
  const [x, setX] = useState({});

  

  const getData = async () => {
    try {
      const d = await axios.get(process.env.REACT_APP_API_URI);

      const tickets = d.data.tickets;

      var containers = {};

      for (let i = 0; i < tickets.length; i++) {
        let status = tickets[i].status;
        if (!containers[status]) {
          containers[status] = [];
        }

        containers[status].push(tickets[i]);
      }

      
      
      console.log(containers);
      await setX(containers);
    } catch (error) {
      console.log(error);
    }
  };

  // if(x.length)
  console.log(x);

  useEffect(() => {
    getData();
    console.log(x);

    setX(x);
  }, [sortBy]);

  return (
    <div>
      <div className="stacks">
        {Object.keys(x).map((key) => (
          <Container header_title={key} y={x[key]} sortBy={sortBy} />
        ))}
      </div>
    </div>
  );
}

export default Status;
