import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Cardlist.css";
import Card from "../Card";

const Cardlist = ({ status }) => {
  const defaultUser = [
    {
      firstName: "Jimmy",
      lastName: "Zhang",
      email: "jimmylovewebdev@gmail.com",
      intro:
        "Hi, My name is Jimmy and I'm a software engineer. My current focus is taking John's web class.",
      phone: "206123456789",
      job: "Web Developer",
      location: "San Mateo, CA",
      profileImg: "/images/profile-icon1.png",
      id: "jimmy1",
    },
    {
      profileImg: "",
      firstName: "wanye",
      lastName: "tseng",
      email: "@@@",
      intro: "3",
      phone: "3",
      job: "3",
      location: "3",
      id: "jimmy1",
    },
    {
      profileImg: "",
      firstName: "jason",
      lastName: "chen",
      email: "123@gmail.com",
      intro: "555",
      phone: "55",
      job: "555",
      location: "555",
      id: "jimmy2",
    },
    {
      profileImg: "",
      firstName: "bob",
      lastName: "lin",
      email: "@",
      intro: "44",
      phone: "444",
      job: "44",
      location: "444",
      id: "jimmy3",
    },
  ];
  const [cards, setCards] = useState([]);
  const [user, setUser] = useState({});
  const [isDefault, setIsDefault] = useState(true);

  // check if user logged in
  const getProfile = () => {
    fetch("/getusers")
      .then((res) => res.json())
      .then((user) => {
        console.log("get user success");
        setUser(user);
      })
      .catch(() => {
        console.log("get user fail!!!!");
        setUser({});
      });
  };

  const populateCards = () => {
    if (user !== null) {
      fetch(`/get${status}Cards`)
        .then((res) => res.json())
        .then((item) => {
          console.log("fetching success");
          setCards(item);
          setIsDefault(false);
          // console.log("current cards len", cards.legnth);
        })
        .catch(() => {
          console.log("fetching error");
        });
    } else {
      console.log("use default users");
      setCards(defaultUser);
    }
  };
  useEffect(getProfile, []);
  useEffect(populateCards, [user, status]);

  return (
    <>
      <div className="row py-3 mx-5">
        {status === "My" ? (
          <h3 className="p-3">Your Cards</h3>
        ) : (
          <h3 className="p-3">Collections</h3>
        )}

        {cards !== undefined && cards.length > 0 ? (
          cards.map((items) => (
            <div className="col-sm-3" key={items.id}>
              <Card currentUser={items} />
            </div>
          ))
        ) : (
          <h3 className="p-3">You don't have any cards here!</h3>
        )}
        {isDefault ? <h2>These are default cards</h2> : null}
      </div>
    </>
  );
};
Cardlist.propTypes = {
  status: PropTypes.string.isRequired,
};
export default Cardlist;
