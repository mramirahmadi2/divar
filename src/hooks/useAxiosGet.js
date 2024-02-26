// hooks/useAxios.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const useAxios = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Clean-up function
    return () => {
      // You can perform any clean-up here if needed
    };
  }, [url]);

  return { data, loading, error };
};

export default useAxios;
