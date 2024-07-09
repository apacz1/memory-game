import Card from "./components/Card";

function App() {
  const cardsArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <h1>Memory Game</h1>
      <div className="appContainer">
        <h2>High Score: </h2>
        <h2>Current Score: </h2>
        <div className="cardsContainer">
          {cardsArr.map((index) => {
            return <Card key={index} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
