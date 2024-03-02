import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';

interface ApiResponse {
  data: {
    id: number;
    name: string;
    parent_id: number;
    latitude: string;
    longitude: string;
  }[];
}

interface PostDataParams {
  q: string; // Assuming 'q' represents the search query string
  province_id?: number; // Make 'province_id' optional with the '?' symbol
}

const usePostData = (url: string) => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const postData = async (postData: PostDataParams) => {
    setLoading(true);
    try {
      const response: AxiosResponse<ApiResponse> = await axios.post(url, postData);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      setError('An error occurred while fetching data.');
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, postData };
};

export default usePostData;
