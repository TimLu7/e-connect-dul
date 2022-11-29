import "./HomeScreen.css";
import Navigation from "../../components/Navigation";
import Cardlist from "../../components/Cardlist";
// import OtherCards from "../../components/OtherCards";
import Footer from "../../components/Footer";
import CreateCardForm from "../../components/CreateCardForm";
import Board from "../../components/Board";

const HomeScreen = () => {
  return (
    <>
      <Navigation />
      <Board />
      <Cardlist status={"My"} />
      <Cardlist status={"Other"} />
      <CreateCardForm />
      <Footer />
    </>
  );
};
HomeScreen.propTypes = {};
export default HomeScreen;
