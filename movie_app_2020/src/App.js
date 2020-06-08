import "./App.css";

import Movie from "./Movie";
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
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMoives();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                >
                  {" "}
                </Movie>
              );
            })}
      </div>
    );
  }
}

export default App;
