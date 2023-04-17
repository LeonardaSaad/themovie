import React, { useEffect, useState } from "react";

const useFetch = (url, results = true) => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => results ? setData(data.results) : setData(data))
    }, [url])

  return [data];
};

export default useFetch;
