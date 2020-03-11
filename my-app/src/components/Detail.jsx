import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

const Detail = props => {
  const id = props.match.params.id;
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:7100/cource/" + id)
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <Fragment>
      {console.log(data)}
      <div key={data.id}>
        <h2>detail cource</h2>
        <h3>{data.title}</h3>
        <span>{data.author}</span>
        <br />
        <span>{data.price}</span>
        <br />
        <span>{data.subscriber}</span>
        <br />
      </div>
    </Fragment>
  );
};

export default Detail;
