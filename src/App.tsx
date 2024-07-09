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

  return (
    <>
      <h1>Memory Game</h1>
      <div className="appContainer">
        <h2>High Score: </h2>
        <h2>Current Score: </h2>
        <div className="cardsContainer">
          {fetchedData.map((card) => {
            return <Card key={card.id} card={card} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
