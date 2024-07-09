import { useState, useEffect } from "react";
import { Cards } from "../App";
import axios from "axios";

function useFetch() {
  const [data, setData] = useState<Cards[]>([]);
  useEffect(() => {
    const generateUniqueRandomNumbers = (
      min: number,
      max: number,
      count: number
    ) => {
      const uniqueNumbers = new Set<number>();
      while (uniqueNumbers.size < count) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        uniqueNumbers.add(randomNum);
      }
      return [...uniqueNumbers];
    };

    const randomNumbers: number[] = generateUniqueRandomNumbers(1, 50, 10);
    async function getData() {
      try {
        const requests = randomNumbers.map((item) =>
          axios.get(`https://pokeapi.co/api/v2/pokemon/${item}`)
        );
        const responses = await Promise.all(requests);

        const responseData = responses.map((response) => {
          const dataId = response.data.id;
          const dataUrl = response.data.sprites.front_default;
          const dataName = response.data.name;
          return { id: dataId, url: dataUrl, name: dataName };
        });

        setData(responseData);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);
  return { data };
}

export default useFetch;
