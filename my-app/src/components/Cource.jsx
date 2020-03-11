import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Cource = props => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:7100/cources")
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const courceDetail = (id) =>{
    console.log(id);
  }

  return (
    <Fragment>
      <div>
        {data.map((val, index) => {
          return (
            <div key={val.id}>
              <div>
                <img src={val.image} alt={val.title} />
              </div>
              <div>
                <h3>
                  <Link to={`/detail/${val.id}`}>
                    <span>{val.title}</span>
                  </Link>
                </h3>
                <span>{val.author}</span>
                <br />
                <span>{val.price}</span>
                <br />
                <span>{val.subsriber}</span>
                <br />
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Cource;
