import "./App.css";

import PropTypes from "prop-types";
import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("Hello");
  }
  state = {
    isLoading: true,
    movies: [],
  };
  getMoives = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({ movies, isLoading: false });
    console.log(movies);
  };
  componentDidMount() {
    this.getMoives();
  }
  render() {
    return <div>{this.state.isLoading ? "Loading..." : "We are Ready"}</div>;
  }
}

export default App;
