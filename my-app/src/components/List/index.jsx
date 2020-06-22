import React, { Fragment, useEffect, useRef, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { SearchContext } from "../../ContextApi/SearchContect";

const List = (props) => {
  const isCurrent = useRef(true);
  const { data } = useContext(SearchContext);

  useEffect(() => {
    return () => {
      isCurrent.current = false;
    };
  }, []);


  if (!data.data.length) {
    return <Redirect to={{ pathname: "/" }} />;
  }

  return (
    <Fragment>
      <div>
        {data.data.map((val, index) => {
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

export default List;
