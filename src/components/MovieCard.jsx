import React from "react";

const Card = (props) => (
  <div className="card d-flex justify-content-start m-3">
    <img
      src={props.img}
      className="card-img-top poster-img ml-auto"
      alt="..."
    />
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.text}</p>
      <button type="button" className="btn btn-theme">
        {props.label}
      </button>
    </div>
  </div>
);

export default Card;
