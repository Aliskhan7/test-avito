import React from "react";
import { NavLink } from "react-router-dom";

function Photo(props) {
  return (
    <NavLink to={`/modal/${props.photo.id}`}>
      <div className="main-photos__item">
        <img src={props.photo.url} alt="" />
      </div>
    </NavLink>
  );
}

export default Photo;
