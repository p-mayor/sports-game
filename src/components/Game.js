import React from "react";
import Team from "./Team";
import Scoreboard from "./Scoreboard";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeTeam: { key: "homeTeam", score: 0, shotsTaken: 0 },
      awayTeam: { key: "awayTeam", score: 0, shotsTaken: 0 },
      resetCount: 0
    };
  }
  handleShoot = teamKey => {
    // console.log(teamKey)
    this.setState(state => ({
      [teamKey]: {
        key: [teamKey],
        shotsTaken: state[teamKey].shotsTaken + 1,
        score: state[teamKey].score
      }
    }));
    if (Math.random() > 0.5) {
      this.setState(state => ({
        [teamKey]: {
          key: [teamKey],
          shotsTaken: state[teamKey].shotsTaken,
          score: state[teamKey].score + 1
        }
      }));
    }
  };

  handleReset = event => {
    this.setState(state => ({
      homeTeam: { key: "homeTeam", score: 0, shotsTaken: 0 },
      awayTeam: { key: "awayTeam", score: 0, shotsTaken: 0 },
      resetCount: state.resetCount + 1
    }));
  };

  render() {
    return (
      <div className="container">
        <h1>Welcome to {this.props.venue}</h1>
        <div className="teams">
          <Team
            name="dr steven brule"
            img="https://pbs.twimg.com/profile_images/3543879283/1509e34005183da5ea4eb29150f341e5_400x400.jpeg"
            shotsTaken={this.state.homeTeam.shotsTaken}
            score={this.state.homeTeam.score}
            handleShoot={() => {
              this.handleShoot(this.state.homeTeam.key);
            }}
          />
          <Team
            name="little stevie"
            img="https://pbs.twimg.com/profile_images/1438746953/0_400x400.jpg"
            shotsTaken={this.state.awayTeam.shotsTaken}
            score={this.state.awayTeam.score}
            handleShoot={() => {
              this.handleShoot(this.state.awayTeam.key);
            }}
          />
        </div>
        <Scoreboard
          homeTeamScore={this.state.homeTeam.score}
          awayTeamScore={this.state.awayTeam.score}
        />
        <button className="reset-button" onClick={this.handleReset}>
          Reset
        </button>
        {this.state.resetCount > 0 && <div>{this.state.resetCount}</div>}
      </div>
    );
  }
}

export default Game;
