import React, { useState, useRef } from "react";
import "./PostShare.css";
/*import ProfileImage from "../../Images/Profile_avatar1.png"*/
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage, uploadPost } from "../../actions/UploadAction";

const PostShare = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.postReducer.uploading);
  //const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const { user } = useSelector((state) => state.authReducer.authData);
  const desc = useRef();

  // handle Image Change
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img);
    }
  };

  // handle uploading post
  const handleUpload = async (e) => {
    e.preventDefault();

    //post data
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    // Reset Post Share
    const resetShare = () => {
      setImage(null);
      desc.current.value = "";
    };

    try {
      if (image) {
        const data = new FormData();
        const fileName = Date.now() + image.name;
        data.append("name", fileName);
        data.append("file", image);
        newPost.image = fileName;

        const response = await dispatch(uploadImage(data));

        if (response) {
          newPost.image = response.data;
          console.log("Image uploaded successfully:", response.data);
        } else {
          console.error("Error uploading image:", response);
          // Handle upload failure
        }
      }

      dispatch(uploadPost(newPost));
      resetShare();
    } catch (error) {
      console.error("Error uploading image:", error);
      // Handle general upload error
    }
  };

  return (
    <div className="PostShare">
      <img
        src={
          user.profilePicture
            ? user.profilePicture
            : "https://res.cloudinary.com/waletee/image/upload/v1715783864/default_profile_xbquso.png"
        }
        alt="Profile"
      />
      <div>
        <input
          ref={desc}
          required
          type="text"
          placeholder="A penny for your thought!"
        />
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>

          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: "var(--schedule)" }}>
            <UilSchedule />
            Schedule
          </div>
          <button
            className="button ps-button"
            onClick={handleUpload}
            disabled={loading}
          >
            {loading ? "Uploading..." : "Share"}
          </button>

          <div style={{ display: "none" }}>
            <input type="file" ref={imageRef} onChange={onImageChange} />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="preview" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
