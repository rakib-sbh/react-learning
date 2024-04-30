import "./Card.css";

const date = new Date();

const day = date.getDay();
const month = date.getMonth();
const year = date.getFullYear();

const Card = ({ titleText }) => {
  return (
    <div className="card">
      <h3 className="card-header">{titleText}</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident,
        sint?
      </p>
      <p>
        <b>
          {day}/{month}/{year}
        </b>
      </p>
    </div>
  );
};

export default Card;
