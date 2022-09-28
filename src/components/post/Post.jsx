import React from "react";
import "./post.css";

const Post = ({ photo }) => {
  return (
    <div className="post">
      <div className="postImgContainer">
        <img src={photo.url} alt="" className="postImg" />
      </div>
      <div className="postInfoContainer">
        <div className="postInfo">
          <span className="postTitle">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
            similique fugit! A repellendus labore aliquam eveniet! Nostrum
            reiciendis ipsa consectetur modi ut officia. Ipsa eligendi maxime
            est assumenda molestias quos?
          </span>
          <span className="postTitle">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
            similique fugit! A repellendus labore aliquam eveniet! Nostrum
            reiciendis ipsa consectetur modi ut officia. Ipsa eligendi maxime
            est assumenda molestias quos?
          </span>
          <span className="postTitle">{photo.title}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
