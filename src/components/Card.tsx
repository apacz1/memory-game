import { Cards } from "../App";

function Card({ card, handleClick }: { card: Cards; handleClick: () => void }) {
  return (
    <div className="card">
      <img src={card.url} onClick={handleClick} />
      <p className="pokeName">{card.name}</p>
    </div>
  );
}

export default Card;
