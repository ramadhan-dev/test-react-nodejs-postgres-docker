import { useState, useCallback, useEffect, useContext, useRef } from "react";
import axios from "axios";

const HomeHooks = initialState => {
    const isCurrent = useRef(true)
    const [search, setSearch] = useState(initialState);
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false);
    const [event, setEvent] = useState(false);

    useEffect(() => {
      console.log("CUR", {isCurrent});
      
      return () => {
       isCurrent.current = false;
      };
    }, []);


    // handle eventtag input
    const onChange = useCallback((e) => {
        setSearch(e.target.value)
    }, [setSearch]);



    // handle search data
    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const data = await axios
          .get("http://localhost:7100/cources")
          .then((response) => {
              return response
          })
          .catch((error) => {
            console.log(error);
          });
        setData(data.data);
        setLoading(false);
        
    }

    return { data, onChange, submit, loading, event };
}


export default HomeHooks