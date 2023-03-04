import React from "react";

const SubjectCard = (props) => {
  return (
    <li key={props.title} className="subject-card">
      {props.title}
    </li>
  );
};

export default SubjectCard;
