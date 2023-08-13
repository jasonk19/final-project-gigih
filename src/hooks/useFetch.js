import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch({ url, params, headers, showSuccessMessage = false, showErrorMessage = false, successMessage, errorMessage }) {
  const toast = useToast()

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(url, { params, headers });
        setData(response.data);
       
        if (showSuccessMessage) {
          toast({
            title: successMessage,
            status: 'success',
            duration: '3000',
            isClosable: true,
            position: 'top'
          })
        }
      } catch (error) {
        setError(error.response.data);

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

    getData();
  }, []);

  return {
    data,
    loading,
    error
  }
}