import React, { Component } from "react";
import "./App.css"
import "./Board.css"

class Board extends Component {

  createCard() {
    console.log('Create card running');
    //return;
  }

  render () {
    return (
      <div className="board">
       <center>
        <button onClick={Board.createCard}>New Card</button>
        <h1>Board</h1>
      </center>
    </div>
    )
  }
}

export default Board;
