import "./HomeScreen.css";
import Navigation from "../../components/Navigation";
import Cardlist from "../../components/Cardlist";
import Footer from "../../components/Footer";
import CreateCardForm from "../../components/CreateCardForm";
import Board from "../../components/Board";
import { useState, useEffect } from "react";

const HomeScreen = () => {
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

    return (
        <main>
            <Navigation current={user} changeUser={changeUser} />
            <Board current={user} />
            {user !== undefined ? (
                <div>
                    <Cardlist status={"My"} current={user} />
                    <Cardlist status={"Other"} current={user} />
                    <CreateCardForm current={user} />
                </div>
            ) : (
                <Cardlist status={"gallery"} current={user} />
            )}
            <Footer />
        </main>
    );
};
HomeScreen.propTypes = {};
export default HomeScreen;
