import React from "react";
import { Link } from "react-router-dom";
import classes from "./Genres.module.css";
function MovieGenreDetails({ genreData }) {
  return (
    <div className={classes["genre-container"]}>
      {genreData.map((genre, i) => (
        <Link
          key={"genre" + genre.id}
          className={
            i % 2 === 0 ? classes["first-wrapper"] : classes["second-wrapper"]
          }
          to={`${genre.id}/${genre.name}`}
        >
          {genre.name}
        </Link>
      ))}
    </div>
  );
}

export default MovieGenreDetails;
