import { useState, useEffect } from "react";
import "./OtherCards.css";
import Card from "../Card";

const OtherCards = () => {
  const [cards, setCards] = useState();
  const [user, setUser] = useState({});
  const [isDefault, setIsDefault] = useState(true);
  return (
    <>
      <div className="row py-3 mx-5">
        <h3 className="p-3">Collections</h3>
        <div className="col-sm-3">
          <Card />
        </div>
        <div className="col-sm-3">
          <Card />
        </div>
        <div className="col-sm-3">
          <Card />
        </div>
      </div>
    </>
  );
};
OtherCards.propTypes = {};
export default OtherCards;
