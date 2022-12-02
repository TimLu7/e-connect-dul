import Card from "../Card";
import "./CreateCardForm.css";
import { useState } from "react";

const CreateCardForm = () => {
  const [selectedImage, setSelectedImage] = useState(
    "/images/profile-icon1.png"
  );
  const [firstName, setFirstName] = useState("Jimmy");
  const [lastName, setLastName] = useState("Zhang");
  const [email, setEmail] = useState("jimmylovewebdev@gmail.com");
  const [intro, setIntro] = useState(
    "Hi, My name is Jimmy and I'm a software engineer. My current focus is taking John's web class."
  );
  const [phone, setPhone] = useState("503123456789");
  const [job, setJob] = useState("Web Developer");
  const [location, setLocation] = useState("San Mateo, CA");
  const profileImg =
    typeof selectedImage === "string"
      ? selectedImage
      : URL.createObjectURL(selectedImage);
  const currentUser = {
    profileImg: profileImg,
    firstName: firstName,
    lastName: lastName,
    email: email,
    intro: intro,
    phone: phone,
    job: job,
    location: location,
  };

  const onSubmitCreateCard = (event) => {
    // event.preventDefault();
    const user = {};
    user.firstName = event.target.firstName.value;
    user.lastName = event.target.lastName.value;
    user.email = event.target.email.value;
    user.intro = event.target.intro.value;
    user.phone = event.target.phone.value;
    user.job = event.target.job.value;
    user.location = event.target.location.value;
    user.image = event.target.image.value;
    // do stuff
    console.log("User:", user);
    fetch("/createMyCard", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
  };

  return (
    <>
      <div className="row py-3 mx-5">
        <div className="col">
          <Card currentUser={currentUser} />
        </div>
        <div className="col">
          <form
            className="createCard mx-5 my-4 px-3"
            onSubmit={onSubmitCreateCard}
          >
            <h3>Create new card</h3>
            <div className="form-group">
              <label for="firstName">FirstName</label>
              <input
                type="FirstName"
                className="form-control"
                id="firstName"
                placeholder="FirstName"
                required={true}
                name="firstName"
                onChange={(event) => setFirstName(event.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label for="lastName">LastName</label>
              <input
                type="lastName"
                className="form-control"
                id="lastName"
                placeholder="LastName"
                required={true}
                name="lastName"
                onChange={(event) => setLastName(event.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="email"
                required={true}
                name="email"
                onChange={(event) => setEmail(event.target.value)}
              ></input>
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label for="intro">Intro</label>
              <input
                type="text"
                className="form-control"
                id="intro"
                placeholder="Intro"
                required={true}
                name="intro"
                onChange={(event) => setIntro(event.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label for="phone">Phone</label>
              <input
                type="phone"
                className="form-control"
                id="phone"
                placeholder="Phone"
                required={true}
                name="phone"
                onChange={(event) => setPhone(event.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label for="job">Job</label>
              <input
                type="text"
                className="form-control"
                id="job"
                placeholder="Job"
                required={true}
                name="job"
                onChange={(event) => setJob(event.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label for="location">Location</label>
              <input
                type="location"
                className="form-control"
                id="location"
                placeholder="Location"
                required={true}
                name="location"
                onChange={(event) => setLocation(event.target.value)}
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
                onChange={(event) => {
                  setSelectedImage(event.target.files[0]);
                }}
              ></input>
            </div>
            <button type="submit" className="btn btn-primary mx-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
CreateCardForm.propTypes = {};
export default CreateCardForm;
