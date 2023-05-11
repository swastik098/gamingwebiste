import React from "react";
import ReactPlayer from "react-player";

const Course = (props) => {
  return (
    <div>
      <ReactPlayer url={props.videoUrl} controls width="100%" height="auto" />
    </div>
  );
};

export default Course;
