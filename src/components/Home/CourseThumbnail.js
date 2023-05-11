import React from "react";

const CourseThumbnail = (props) => {
  return (
    <div onClick={props.onClick}>
      <img src={props.thumbnailUrl} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default CourseThumbnail;
