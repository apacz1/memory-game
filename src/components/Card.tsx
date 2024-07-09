import { Cards } from "../App";

function Card({ card }: { card: Cards }) {
  return <div className="card">{card.id}</div>;
}

export default Card;
