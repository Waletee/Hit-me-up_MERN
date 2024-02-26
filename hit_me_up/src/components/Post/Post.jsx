import React, { useState } from "react";
import "./Post.css";
import Comment from "../../Images/comment.png";
import Share from "../../Images/share.png";
import Like from "../../Images/like.png";
import NotLike from "../../Images/dislike.png";
/*import { likePost } from "../../api/PostsRequests";
import { useSelector } from "react-redux";*/

const Post = ({ data }) => {
  /*const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length)

  
  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked? setLikes((prev)=>prev-1): setLikes((prev)=>prev+1)
  };*/
  return (
    <div className="Post">
      <img
        src={data.img /*? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""*/}
        alt=""
      />
      <div className="postReact">
        <img
          src={data.liked ? Like : NotLike}
          alt=""
        />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      <span className="right-align" style={{ color: "var(--gray)", fontSize: "13px" }}>{data.likes} likes</span>

      <div className="detail">
      <span className="right-align"><b>{data.name}</b></span>
      <span className="right-align"> {data.desc}</span>

      </div>
      

      {/*<div className="postReact">
        <img
          src={liked ? Like : NotLike}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={handleLike}
        />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes} likes
      </span>
      */}
    </div>
  );
};

export default Post;
