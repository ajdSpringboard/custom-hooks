import { useState } from "react";
import axios from "axios";

function useAxios(url) {
  const [data, setData] = useState([]);

  // function to add a new object of data to our array
  const addData = async (dynURL = "") => {
    const response = await axios.get(url + dynURL);
    setData((data) => [...data, { ...response.data }]);
  };

  return [data, addData];
}

export default useAxios;
