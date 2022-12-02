import "./board.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BK = process.env.REMOTE_BACKEND;

const Board = ({ current }) => {
  // const [user, setUser] = useState({});
  return (
    <div className="board">
      <h2 className="board-title">
        {current !== undefined
          ? `Hi, ${current}`
          : "Get the Best Connections You Deserve!"}
      </h2>
      {current !== undefined ? (
        ""
      ) : (
        <span className="board-signup-span">
          <Link to="/signup" className="board-signup"></Link>
        </span>
      )}
      {/* <h1>{BK}</h1> */}
    </div>
  );
};
Board.propTypes = {
  current: PropTypes.string.isRequired,
};
export default Board;
