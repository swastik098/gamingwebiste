import React, { useState, useEffect } from "react";
import axios from "axios";

const YouTubeCard = ({ videoId }) => {
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=AIzaSyDT2H5EqpzxnDGkaZXg3SnbCpGDjOuWoXU`
        );
        setVideoData(response.data.items[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideoData();
  }, [videoId]);

  if (!videoData) {
    return null;
  }

  const { title } = videoData.snippet;
  const thumbnailUrl = videoData.snippet.thumbnails.high.url;
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div>
      <a href={videoUrl} target="_blank" rel="noopener noreferrer">
        <img className="rounded-lg" src={thumbnailUrl} alt={title} />
        <h3 className="truncate max-w-full overflow-hidden pt-5">{title}</h3>
      </a>
    </div>
  );
};

export default YouTubeCard;
