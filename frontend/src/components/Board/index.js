import "./board.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Board = () => {
  const [user, setUser] = useState({});

  const getProfile = () => {
    fetch("/getusers")
      .then((res) => res.json())
      .then((user) => {
        console.log("board get user", user);
        setUser(user);
      })
      .catch(() => {
        console.log("board get user fail", user);
        setUser({});
      });
  };
  useEffect(getProfile, []);
  return (
    <div className="board">
      <h2 className="board-title">
        {user.user !== undefined
          ? `Hi, ${user.user}`
          : "Get the Best Connections You Deserve!"}
      </h2>

      <span className="board-signup-span">
        <Link to="/signup" className="board-signup"></Link>
      </span>
    </div>
  );
};
Board.propTypes = {};
export default Board;
