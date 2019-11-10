import React from "react";

function Team(props) {
  return (
    <div className="team">
      <h1>{props.name}</h1>
      <div>
        <img height="200px" src={props.img} alt="team image" />
      </div>
      <button onClick={props.handleShoot}>Shoot!</button>
      <div>Shots Taken:{props.shotsTaken}</div>
      <div>Score:{props.score}</div>
      {props.shotsTaken > 0 && (
        <div>Shot Percent:{(props.score / props.shotsTaken).toFixed(2)}</div>
      )}
    </div>
  );
}

export default Team;
