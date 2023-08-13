import { useState } from "react";

export default function useMutate({ service }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  async function mutate({ url, payload, headers }) {
    setLoading(true)
    try {
      const response = await service(url, payload, { headers });

      return response.data
    } catch (error) {
      setError(error.response.data)
    } finally {
      setLoading(false)
    }
  }

  function clear() {
    setError(undefined)
  }

  return {
    mutate, clear, loading, error
  }

}