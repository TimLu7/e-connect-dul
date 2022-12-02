import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import "./Card.css";

const Card = ({ currentUser, status }) => {
  const defaultUser = {
    firstName: "Jimmy",
    lastName: "Zhang",
    email: "jimmylovewebdev@gmail.com",
    intro:
      "Hi, My name is Jimmy and I'm a software engineer. My current focus is taking John's web class.",
    phone: "206123456789",
    job: "Web Developer",
    location: "San Mateo, CA",
    profileImg: "/images/profile-icon1.png",
  };

  const [updateCard, setUpdateCard] = useState(false);
  const user = currentUser === undefined ? defaultUser : currentUser;
  const [isPublic, setIsPublic] = useState(false);
  const settingPub = () => {
    if (status) {
      setIsPublic(true);
    }
  };
  useEffect(settingPub, [status]);

  const onSubmitUpdateCard = (event) => {
    const user = {};
    user.firstName = event.target.firstName.value;
    user.lastName = event.target.lastName.value;
    user.email = event.target.email.value;
    user.intro = event.target.intro.value;
    user.phone = event.target.phone.value;
    user.job = event.target.job.value;
    user.location = event.target.location.value;
    user.image = event.target.image.value;
    user.id = currentUser.id;
    fetch("https://project3-tp1q.onrender.com/updateCard", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
  };

  const [show, setShow] = useState(true);
  const deleteCard = () => {
    let req = { id: currentUser.id };
    fetch("/deleteCard", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req),
    });
    setShow(false);
  };
  const galleryCard = () => {
    console.log("search rendering", status);
    if (status === "gallery") {
      return "";
    } else if (status === true) {
      return (
        <span>
          <button>Add</button>
        </span>
      );
    }
  };
  // const [addCard, setAddCard] = useState({});

  return (
    <>
      <div
        className="card text-center"
        style={{ display: show ? "block" : "none" }}
      >
        <img
          src={user.profileImg}
          className="img img-responsive card-icon"
          alt="card-icon"
        />

        <div
          className="card-content"
          style={{ display: updateCard ? "none" : "block" }}
        >
          <div className="card-name">
            {user.firstName + " " + user.lastName}
            <p>{user.email}</p>
          </div>
          <div className="card-description">{user.intro}</div>
          <div className="row">
            <div className="col-xs-4">
              <div className="card-overview">
                <p>PHONE</p>
                <h6>{user.phone}</h6>
              </div>
            </div>
            <div className="col-xs-4">
              <div className="card-overview">
                <p>JOB</p>
                <h6>{user.job}</h6>
              </div>
            </div>
            <div className="col-xs-4">
              <div className="card-overview">
                <p>LOCATION</p>
                <h6>{user.location}</h6>
              </div>
            </div>
            <div className="col-xs-4 buttons-container">
              {isPublic ? (
                galleryCard()
              ) : (
                <span>
                  <button onClick={() => setUpdateCard((prev) => !prev)}>
                    <img src="/images/edit-icon2.png" alt="edit-button" />
                  </button>
                  <button onClick={deleteCard}>
                    <img src="/images/delete-icon.png" alt="delete-button" />
                  </button>
                </span>
              )}
            </div>
          </div>
        </div>
        <div
          className="card-update-form"
          style={{ display: updateCard ? "block" : "none" }}
        >
          <form className="updateCard px-1" onSubmit={onSubmitUpdateCard}>
            <h3>Update your card</h3>
            <div className="form-group">
              <label for="firstName">FirstName</label>
              <input
                type="FirstName"
                className="form-control"
                id="firstName"
                placeholder={user.firstName}
                required={true}
                name="firstName"
              ></input>
            </div>
            <div className="form-group">
              <label for="lastName">LastName</label>
              <input
                type="lastName"
                className="form-control"
                id="lastName"
                placeholder={user.lastName}
                required={true}
                name="lastName"
              ></input>
            </div>
            <div className="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder={user.email}
                required={true}
                name="email"
              ></input>
            </div>
            <div className="form-group">
              <label for="intro">Intro</label>
              <input
                type="text"
                className="form-control"
                id="intro"
                placeholder={user.intro}
                required={true}
                name="intro"
              ></input>
            </div>
            <div className="form-group">
              <label for="phone">Phone</label>
              <input
                type="phone"
                className="form-control"
                id="phone"
                placeholder={user.phone}
                required={true}
                name="phone"
              ></input>
            </div>
            <div className="form-group">
              <label for="job">Job</label>
              <input
                type="text"
                className="form-control"
                id="job"
                placeholder={user.job}
                required={true}
                name="job"
              ></input>
            </div>
            <div className="form-group">
              <label for="location">Location</label>
              <input
                type="location"
                className="form-control"
                id="location"
                placeholder={user.location}
                required={true}
                name="location"
              ></input>
            </div>
            <div className="form-group">
              <label for="profieImg">Upload your photo </label>
              <input
                type="file"
                accept="image/*"
                className="form-control-file"
                id="profieImg"
                name="image"
              ></input>
            </div>
            <button
              type="submit"
              className="btn btn-primary mx-2"
              onClick={() => setUpdateCard((prev) => !prev)}
            >
              update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

Card.protoType = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  profileImg: PropTypes.string.isRequired,
};

export default Card;
