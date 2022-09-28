import React from "react";
import "./skeleton.css";

export default function Skeleton({ type }) {
  const COUNTER = 1;
  const FeedSkeleton = () => (
    <div className="postSk">
      <div className="postSkImg"></div>
      <div className="postSkInfo">
        <div className="postSkDetail">
          <div className="postSkText"></div>
          <div className="postSkText"></div>
          <div className="postSkText sm"></div>
        </div>
      </div>
    </div>
  );

  if (type === "feed") return Array(COUNTER).fill(<FeedSkeleton />);
}
