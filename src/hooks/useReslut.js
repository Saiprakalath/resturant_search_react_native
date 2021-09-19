import  { useState, useEffect } from "react";
import axios from "../api/base";

export default () => {
  const [results, setResluts] = useState([]);
  const [errorMessage, setErrorMessage] = useState();
  const searchApi = async (searchTerm) => {
    try {
      const response = await axios.get("/search", {
        params: {
          limits: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResluts(response.data.businesses);
    } catch (err) {
      setErrorMessage("Somthing went wrong");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage];
};
