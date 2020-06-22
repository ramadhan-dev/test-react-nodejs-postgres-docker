import React, { Fragment, useRef, useEffect, useContext } from "react";
import "./Home.css";
import InputTag from "../../shareds/Input/Text";
import HomeHooks from "./hooks/home";
import Button from "../../shareds/button";
import { SearchContext } from "../../ContextApi/SearchContect";
import Axios from "axios";

const Home = (props) => {

  const isCurrent = useRef(true);
  const { dispatch } = useContext(SearchContext);

  // initial hooks
  const initialState = { search: "" };
  const { onChange, loading, event } = HomeHooks(initialState);

  // effect
  useEffect(() => {
    return () => {
      isCurrent.current = false;
    };
  }, []);


  // get data
  const submit = async (e) => {
    e.preventDefault();
    const data = await Axios.get("http://localhost:7100/cources")
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
      dispatch({
        type: "SET_DATA",
        payload: data.data,
      });
    props.history.push("/search");
  };


  return (
    <Fragment>
      <div id="Home">
        <form
          action="#"
          onSubmit={(e) => {
            submit(e);
          }}
        >
          <InputTag change={onChange} event={event} />
          <div>
            <Button
              id="search"
              click={submit}
              text={"Search"}
              loading={loading}
            />
          </div>
        </form>
      </div>
    </Fragment>
  );
};
export default Home;
