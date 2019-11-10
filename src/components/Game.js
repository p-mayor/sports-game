import React from "react";
import Team from "./Team";
import Scoreboard from "./Scoreboard";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeTeam: { key: "homeTeam", score: 0, shotsTaken: 0 },
      awayTeam: { key: "awayTeam", score: 0, shotsTaken: 0 }
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
  render() {
    return (
      <div className="container">
        <h1 className="banner">Welcome to {this.props.venue}</h1>
        <div className="teams">
          <Team
            name="dr steven brule"
            img="https://img1.looper.com/img/uploads/2017/08/The_untold_truth_of_Dr._Steve_Brule.jpg"
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
      </div>
    );
  }
}

export default Game;
