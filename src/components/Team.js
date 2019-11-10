import React from "react";

function Team(props) {
  return (
    <div className="team">
      <h1>{props.name}</h1>
      <img width="100px" src={props.img} />
      <div>Shots Taken:{props.shotsTaken}</div>
      <div>Score:{props.score}</div>
      {props.shotsTaken > 0 && (
        <div>Shot Percent:{(props.score / props.shotsTaken).toFixed(2)}</div>
      )}
      <button onClick={props.handleShoot}>Shoot!</button>
    </div>
  );
}

export default Team;