import React, { useEffect, useState } from "react";

const useFetch = (url, results = true) => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data.cast))
    }, [url])

  return [data];
};

export default useFetch;
