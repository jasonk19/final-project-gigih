import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch({ url }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    getData();
  }, []);

  return {
    data,
    loading,
    error
  }
}