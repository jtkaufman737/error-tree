import React, { Component } from "react";
import "./App.css"

class Home extends Component {
  render () {
    return(
      <div className="home">
        <div className="level">
          <img src="https://i.imgur.com/xcUlDp1.png"/>
          <p> Welcome to error tree, a resource for debugging inspired by fault tree analysis. You can learn more using the resources below, or dive in by navigating to "Board"</p>
          <p><a href="https://en.wikipedia.org/wiki/Fault_tree_analysis">Wikipedia</a> |
             <a href="http://asq.org/quality-progress/2002/03/problem-solving/what-is-a-fault-tree-analysis.html">ASQ.org</a> |
             <a href="https://quality-one.com/fta/">Quality-One</a></p>

        </div>
      </div>
    )
  }

}

export default Home;
