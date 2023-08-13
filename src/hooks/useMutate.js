import { useState } from "react";
import { useToast } from "@chakra-ui/react";

export default function useMutate({ service, showSuccessMessage = false, showErrorMessage = false, successMessage, errorMessage }) {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  async function mutate({ url, payload, headers }) {
    setLoading(true)
    try {
      const response = await service(url, payload, { headers });

      if (showSuccessMessage) {
        toast({
          title: successMessage,
          status: 'success',
          duration: '3000',
          isClosable: true,
          position: 'top'
        })
      }

      return response.data
    } catch (error) {
      setError(error.response.data)
      if (showErrorMessage) {
        toast({
          title: errorMessage,
          status: 'error',
          duration: '3000',
          isClosable: true,
          position: 'top'
        })
      }
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