// Chun-Wei Tseng
import PropTypes from "prop-types";
import "./profile.css";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProfileScreen = () => {
  // const dummyUser = await fetch("/getProfile").then((res) => res.json());
  // setCurrentUser(ret);
  // console.log("res", ret);
  // res.json();
  // res.send(ret))
  //
  const [currentUser, setCurrentUser] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    addressLOne: "",
    addressLTwo: "",
    postcode: "",
    addressState: "",
    country: "",
    email: "",
    education: "",
  });
  const [firstName, setFirstName] = useState(currentUser.firstname);
  const [lastName, setLastName] = useState(currentUser.lastname);
  const [phoneNumber, setPhoneNumber] = useState(currentUser.phone);
  const [addressLOne, setAddressLOne] = useState(currentUser.addressLOne);
  const [addressLTwo, setAddressLTwo] = useState(currentUser.addressLTwo);
  const [postcode, setPostcode] = useState(currentUser.postcode);
  const [addressState, setAddressState] = useState(currentUser.addressState);
  const [country, setCountry] = useState(currentUser.country);
  const [email, setEmail] = useState(currentUser.email);
  const [education, setEducation] = useState(currentUser.education);
  const navigate = useNavigate();
  function handleDeleteUser(e) {
    // e.preventDefault();
    console.log("Start deleting User");
    try {
      let user = {};
      user.username = currentUser.username;
      console.log("User to be deleted: ", user);
      const res = fetch("/deleteUser", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((res) => {
          console.log("before refirect", res.isDeleted);
          if (res.isDeleted) {
            navigate("/signup");
          }
        })
        .catch((err) => {
          console.log(err);
        });
      if (res) {
        console.log("User is successfully deleted");
        // redirect to sign up page
      } else {
        console.log("User delete failed, please try again");
      }
    } catch (e) {
      console.log(e);
    }
  }

  function handleSaveProfile(e) {
    // e.preventDefault();
    console.log("Start Saving Profile");
    try {
      let user = {};
      user.firstname = firstName;
      user.lastname = lastName;
      user.phone = phoneNumber;
      user.addressLOne = addressLOne;
      user.addressLTwo = addressLTwo;
      user.postcode = postcode;
      user.addressState = addressState;
      user.country = country;
      user.email = email;
      user.education = education;
      console.log("Saving profile of", user);
      fetch("/saveProfile", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }).catch((err) => {
        console.log(err);
      });
    } catch (e) {
      console.log(e);
    }
  }

  const getCurrentUser = () => {
    fetch("/getProfile")
      .then(async (res) => {
        const ret = await res.json();
        setCurrentUser(ret);
        console.log("res", ret);
        // res.json();
        // res.send(ret);
      })
      .catch(() => {
        console.log("get user fail!!!!");
        // setCurrentUser(null);
      });
  };

  // const updateing = (currentUser) => {
  //   setFirstName(currentUser.firstname);
  //   setEmail(currentUser.email);
  // };
  useEffect(getCurrentUser, []);
  // useEffect(updateing, []);

  return (
    <div className="profile-screen">
      <Navigation />
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="/images/profile-icon1.png"
                alt="profile-icon"
              ></img>
              <span className="font-weight-bold">{currentUser.name}</span>
              <span className="text-black-50">{currentUser.email}</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Fisrt Name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                  ></input>
                </div>
                <div className="col-md-6">
                  <label className="labels">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                  ></input>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                  ></input>
                </div>
                <div className="col-md-12">
                  <label className="labels">Address Line 1</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setAddressLOne(e.target.value)}
                    value={addressLOne}
                  ></input>
                </div>
                <div className="col-md-12">
                  <label className="labels">Address Line 2</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setAddressLTwo(e.target.value)}
                    value={addressLTwo}
                  ></input>
                </div>
                <div className="col-md-12">
                  <label className="labels">Postcode</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setPostcode(e.target.value)}
                    value={postcode}
                  ></input>
                </div>
                <div className="col-md-12">
                  <label className="labels">State</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setAddressState(e.target.value)}
                    value={addressState}
                  ></input>
                </div>
                <div className="col-md-12">
                  <label className="labels">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setCountry(e.target.value)}
                    value={country}
                  ></input>
                </div>
                <div className="col-md-12">
                  <label className="labels">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  ></input>
                </div>
                <div className="col-md-12">
                  <label className="labels">Education</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setEducation(e.target.value)}
                    value={education}
                  ></input>
                </div>
              </div>

              <div className="mt-5 text-center">
                <button
                  className="btn btn-primary profile-button mx-1"
                  type="button"
                  onClick={handleSaveProfile}
                >
                  Save Profile
                </button>
                <button
                  className="btn btn-danger mx-1"
                  type="button"
                  onClick={handleDeleteUser}
                >
                  Delete user
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
ProfileScreen.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  profileImg: PropTypes.string.isRequired,
};
export default ProfileScreen;
