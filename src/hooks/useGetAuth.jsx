import { useState, useEffect } from "react";
import axios from "axios";
import { getStorage } from "@/utils/localStorage/getLocalStorage";

function useGetAuth(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const storageProfile = getStorage("profile");
  const accessToken = storageProfile?.accessToken;

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setData(response.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    getData();
  }, [url]);

  const reFetch = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setData(response.data);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  return { data, isLoading, isError, reFetch };
}

export default useGetAuth;
