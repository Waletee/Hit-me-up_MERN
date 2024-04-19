import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { UilSetting } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { uploadImage } from "../../actions/UploadAction";
import { updateUser } from "../../actions/UserAction";

function ProfileModal({ data }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { password, ...other } = data;
  const [formData, setFormData] = useState(other);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const dispatch = useDispatch();
  const param = useParams();

  const { user } = useSelector((state) => state.authReducer.authData);

  // Handles input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handles image changes
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      e.target.name === "profileImage"
        ? setProfileImage(img)
        : setCoverImage(img);
    }
  };

  // form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    let UserData = formData;
    if (profileImage) {
      const data = new FormData();
      const fileName = Date.now() + profileImage.name;
      data.append("name", fileName);
      data.append("file", profileImage);
      UserData.profilePicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    if (coverImage) {
      const data = new FormData();
      const fileName = Date.now() + coverImage.name;
      data.append("name", fileName);
      data.append("file", coverImage);
      UserData.coverPicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    dispatch(updateUser(param.id, UserData));
    setShow(false);
  };

  return (
    <>
      <UilSetting width="2rem" height="1.2rem" onClick={handleShow} />

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>My Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="infoForm">
            <h3>{data.username}'s Information</h3>
            <div>
              <label class="col-form-label">Firstname:</label>
              <input
                type="text"
                className="infoInput"
                name="firstname"
                placeholder="First Name"
                onChange={handleChange}
                value={formData.firstname}
              />
              <label class="col-form-label">Lastname:</label>
              <input
                type="text"
                className="infoInput"
                name="lastname"
                placeholder="Last Name"
                onChange={handleChange}
                value={formData.lastname}
              />
            </div>
            <div>
              <label class="col-form-label">Username:</label>
              <input
                type="text"
                className="infoInput"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                value={formData.username}
              />
            </div>
            <div>
              Where you Work:
              <input
                type="text"
                className="infoInput"
                name="worksAt"
                placeholder="Works at"
                onChange={handleChange}
                value={formData.worksAt}
              />
              Relationship Status:
              <input
                type="text"
                className="infoInput"
                name="relationship"
                placeholder="Relationship Status"
                onChange={handleChange}
                value={formData.relationship}
              />
            </div>
            <div>
              <label class="col-form-label">State/County:</label>
              <input
                type="text"
                className="infoInput"
                name="livesin"
                placeholder="State/County"
                onChange={handleChange}
                value={formData.livesin}
              />
              <label class="col-form-label">Country:</label>
              <input
                type="text"
                className="infoInput"
                name="country"
                placeholder="Country"
                onChange={handleChange}
                value={formData.country}
              />
            </div>
            <div>
              Profile Image:
              <input
                type="file"
                name="profileImage"
                onChange={handleImageChange}
              />
              Cover Image:
              <input
                type="file"
                name="coverImage"
                onChange={handleImageChange}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button className="button infoButton" onClick={handleSubmit}>
            Update
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProfileModal;
