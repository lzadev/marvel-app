import axios from "axios";
import React, { useState, useEffect } from "react";

const useData = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(url)
        .then((response) => {
          setData(response.data.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    };

    getData();
  }, [url]);

  return {
    data,
    isLoading,
  };
};

export default useData;
