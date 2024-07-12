import { useState } from "react";
import Card from "./components/Card";
import useFetch from "./hooks/useFetch";

export type Cards = {
  id: string;
  url: string;
  name: string;
};

function App() {
  const { data: fetchedData } = useFetch();
  console.log(fetchedData);
  const [uniqIdArr, setUniqIdArr] = useState<string[]>([]);
  const [highScore, setHighScore] = useState<number>(0);
  const [currentScore, setCurrentScore] = useState<number>(0);

  const shuffleCards = () => {
    let currentIndex = fetchedData.length;
    while (currentIndex != 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [fetchedData[currentIndex], fetchedData[randomIndex]] = [
        fetchedData[randomIndex],
        fetchedData[currentIndex],
      ];
    }
  };

  const checkCard = (uniqId: string) => {
    if (uniqIdArr.indexOf(uniqId) === -1) {
      setUniqIdArr((prevArray) => {
        return [...prevArray, uniqId];
      });
      setCurrentScore((prevValue) => {
        const newValue = prevValue + 1;
        if (newValue > highScore) setHighScore(newValue);
        return newValue;
      });
      shuffleCards();
    } else {
      setUniqIdArr([]);
      setCurrentScore(0);
      shuffleCards();
    }
  };

  return (
    <>
      <h1>Memory Game</h1>
      <div className="appContainer">
        <h2>High Score: {highScore}</h2>
        <h2>Current Score: {currentScore}</h2>
        <div className="cardsContainer">
          {fetchedData.map((card) => {
            return (
              <Card
                key={card.id}
                card={card}
                handleClick={() => checkCard(card.id)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
