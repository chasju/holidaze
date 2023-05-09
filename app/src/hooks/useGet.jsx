import { useState, useEffect } from "react";
import axios from "axios";

function useGet(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);

        setData(response.data);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
      setIsLoading(false);
    };

    getData();
  }, [url]);

  return { data, isLoading, isError };
}

export default useGet;
