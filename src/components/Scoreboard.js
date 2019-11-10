import React from "react";

function Scoreboard(props) {
  return (
    <div>
      <div>Home score: {props.homeTeamScore}</div>
      <div>Away score: {props.awayTeamScore}</div>
    </div>
  );
}

export default Scoreboard;
