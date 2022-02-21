import React, { Component } from "react";
import Todos from "./components/Todos";


export class App extends Component {
  state = {
    todos:[
      {
        id: 1,
        title: "learn React",
        completed: false,
      },
      {
        id: 2,
        title: "learn React & Tailwind",
        completed: false,
      },
      {
        id: 3,
        title: "learn React & API",
        completed: false,
      },
    ]
  };

  render() {
    return (
      <Todos todos={this.state.todos}/>
    )
  }
}

export default App;
