import "./search.css";
import Card from "../../components/Card";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";

const SearchScreen = () => {
  const [user, setUser] = useState(undefined);
  const getUser = () => {
    fetch("/getusers")
      .then((res) => res.json())
      .then((user) => {
        console.log("home screen getuser", user.user);
        setUser(user.user);
      })
      .catch(() => {
        console.log("home screen fail");
      });
  };
  const changeUser = (prop) => {
    setUser(prop);
  };
  useEffect(getUser, []);
  const [cards, setCards] = useState([]);
  // const [user, setUser] = useState({});
  const [searchContent, setSearchContent] = useState("");
  const handeler = () => {};
  const populateCards = () => {
    fetch(`/getPublicCards`)
      .then((res) => res.json())
      .then((item) => {
        console.log("fetching public cards");
        if (item.length > 20) {
          item = item.subarray(20);
        }
        setCards(item);
        console.log("current cards len", item);
      })
      .catch(() => {
        console.log("fetching error");
      });
  };

  useEffect(populateCards, []);
  return (
    <div>
      <Navigation current={user} changeUser={changeUser} />
      <div className="row">
        <div className="col-1">
          <ul className="vertical-bar">
            <li>popular search</li>
            <li>
              <a className="active" href="#home">
                SDW
              </a>
            </li>
            <li>
              <a href="#news">DS</a>
            </li>
            <li>
              <a href="#contact">DA</a>
            </li>
            <li>
              <a href="#about">BA</a>
            </li>
          </ul>
        </div>
        <div className="col-10 pt-5 search-bar">
          <div className="search-input m-5">
            <input
              type="text"
              placeholder="Search Cards..."
              value={searchContent}
              onChange={(event) => {
                setSearchContent(event.target.value);
              }}
            ></input>
            <button className="search-button mx-3" onClick={handeler}>
              Search
            </button>
          </div>
          <div className="search-result px-5">
            <div className="row">
              {cards !== undefined && cards.length > 0 ? (
                cards.map((items) => (
                  <div className="col-sm-3" key={items.id}>
                    <Card currentUser={items} status={true} />
                  </div>
                ))
              ) : (
                <h3 className="p-3">You don't have any cards here!</h3>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default SearchScreen;
