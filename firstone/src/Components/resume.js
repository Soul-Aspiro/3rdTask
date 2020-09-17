import React from "react";
import data from "./card.json";

var resume = (props) => {
  profile = data[props.location.postcard.id];
  return (
    <div>
      <h1>Resume</h1>
      <div className="row ">
        <div className="col-sm-10 col-md-4 m-1">
          <div className="card">
            <img src={profile.img} alt="Please Connect t internet"></img>
            <h3>{profile.name}</h3>
            <h3>{profile.about}</h3>
            <h3>{profile.phone}</h3>
            <a href={"mailto:" + profile.email}>{profile.email}</a>
          </div>
          <div className="col-sm-10 col-md-4 m-1">
            <h2>Career Odjectives</h2>
            <p>{profile.careerobj}</p>
            <a href={profile.url[0]}>
              <button className="btn btn-primary">GitHub</button>
            </a>
            <a href={profile.url[1]}>
              <button className="btn btn-primary">LinkedIn</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
