import { useEffect, useState } from "react";
import Post from "../post/Post";
import "./feed.css";
import axios from "axios";
import Skeleton from "../skeleton/Skeleton";

const Feed = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
        const response = await res.data;
        setPhotos([response[0]]);
        setIsLoading(false);
      } catch (err) {
        console.log("Errr while loading photos data", err);
        setIsLoading(false);
      }
    };
    getVideos();
  }, []);

  return (
    <div className="feed">
      {isLoading ? (
        <Skeleton type="feed" />
      ) : (
        photos && photos.map((photo) => <Post key={photo.id} photo={photo} />)
      )}
    </div>
  );
};

export default Feed;
