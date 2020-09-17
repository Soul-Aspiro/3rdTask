import React from "react";
import data from "./card.json";

const card = () => {
  return (
    <div>
      <h1>Cards</h1>
      {data.map((values, index) => (
        <div className="row ">
          <div className="col-sm-10 col-md-4 m-1" key={index}>
            <div className="card">
              <img src={values.img} alt="Please Connect t internet"></img>
              <h3>{values.name}</h3>
              <h3>{values.about}</h3>
              <a href={"mailto:" + values.email}>{values.email}</a>
              <Link
                to={{ pathname: "/resume", postcard: { id, index } }}
                className="btn btn-btn-outline-primary"
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default card;
