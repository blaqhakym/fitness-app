import axios from "axios";
import { useEffect, useState } from "react";
import { rapidApiKey } from "../constants/index";

const key = rapidApiKey;
const baseUrl = "https://exercisedb.p.rapidapi.com/exercises";

const optionsFn = (url, limit) => {
  return {
    method: "GET",
    url,
    params: { limit: limit || 10 },
    headers: {
      "X-RapidAPI-Key": key,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
};

export const fetchBodyPart = (bodyPart, limit) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const getBodyParts = async () => {
    try {
      setIsLoading(true);
      const options = optionsFn(`${baseUrl}/bodyPart/${bodyPart}`, limit);
      const response = await axios.request(options);
      setData(response.data);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBodyParts();
  }, []);

  const refetchBodyParts = () => getBodyParts();

  return { data, isLoading, error, refetchBodyParts };
};
