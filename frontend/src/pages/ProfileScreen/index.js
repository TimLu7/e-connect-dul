// Chun-Wei Tseng
import "./profile.css";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProfileScreen = () => {
  // get currnet user
  const [user, setUser] = useState(undefined);
  const getUser = () => {
    fetch("/getusers")
      .then((res) => res.json())
      .then((user) => {
        console.log("profile screen getuser", user.user);
        if (user) {
          setUser(user.user);
        }
      })
      .catch(() => {
        console.log("profile screen fail");
      });
  };
  const changeUser = (prop) => {
    setUser(prop);
  };
  useEffect(getUser, []);
  const [profile, setProfile] = useState({});
  const getProfile = () => {
    fetch("/getProfile")
      .then((res) => res.json())
      .then((res) => {
        console.log("profile screen getProfile", res);
        setProfile(res);
      })
      .catch(() => {
        console.log("profile screen fail");
      });
  };
  useEffect(getProfile, [user]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [addressLOne, setAddressLOne] = useState("");
  const [addressLTwo, setAddressLTwo] = useState("");
  const [postcode, setPostcode] = useState("");
  const [addressState, setAddressState] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [education, setEducation] = useState("");
  const fetchingProfile = () => {
    if (profile) {
      setFirstName(profile.firstname);
      setLastName(profile.lastname);
      setEmail(profile.email);
      setPhoneNumber(profile.phoneNumber);
      setAddressLOne(profile.addressLOne);
      setAddressLTwo(profile.addressLTwo);
      setPostcode(profile.postcode);
      setAddressState(profile.addressState);
      setCountry(profile.country);
      setEducation(profile.education);
    }
  };
  useEffect(fetchingProfile, [profile]);
  const navigate = useNavigate();
  const [deleteMes, setDeleteMes] = useState("");
  function handleDeleteUser(e) {
    e.preventDefault();
    console.log("Start deleting User");
    try {
      // let user = {};
      // user.username = currentUser.username;
      console.log("User to be deleted: ", user);
      fetch("/deleteUser", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: user,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log("before refirect", res);
          if (res.isDeleted) {
            navigate("/signup");
          } else {
            setDeleteMes("user delete failure!!");
          }
        })
        .catch((err) => {
          console.log(err);
        });
      // if (res) {
      //   console.log("User is successfully deleted");
      //   // redirect to sign up page
      // } else {
      //   console.log("User delete failed, please try again");
      // }
    } catch (e) {
      console.log(e);
    }
  }

  function handleSaveProfile(e) {
    e.preventDefault();
    console.log("Start Saving Profile");
    try {
      let saveUser = {};
      saveUser.firstname = firstName;
      saveUser.lastname = lastName;
      saveUser.phone = phoneNumber;
      saveUser.addressLOne = addressLOne;
      saveUser.addressLTwo = addressLTwo;
      saveUser.postcode = postcode;
      saveUser.addressState = addressState;
      saveUser.country = country;
      saveUser.email = email;
      saveUser.education = education;
      saveUser.username = user;
      console.log("Saving profile of", saveUser);
      fetch("/saveProfile", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(saveUser),
      }).catch((err) => {
        console.log(err);
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="profile-screen">
      <Navigation current={user} changeUser={changeUser} />
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
              <span className="font-weight-bold">
                {firstName + " " + lastName}
              </span>
              <span className="text-black-50">{email}</span>
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
                <h3>{deleteMes}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
ProfileScreen.propTypes = {};
export default ProfileScreen;
