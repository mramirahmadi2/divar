import { useEffect, useState } from 'react';
import axios from 'axios';

// interface ApiResponse {
//   // Define the structure of your API response
// }
interface ApiResponse {
  data: {
    id: number;
    name: string;
    parent_id: number;
    latitude: string;
    longitude: string;
  }[];
  // Other properties of the API response, if any
}


const useFetchData = (url: string) => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<ApiResponse>(url);
        setData(response.data);
        setError(null);
      } catch (error) {
        setError('An error occurred while fetching data.');
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Cleanup tasks, if any
    };
  }, [url]); // Execute the effect whenever the URL changes

  return { data, loading, error };
};

export default useFetchData;
