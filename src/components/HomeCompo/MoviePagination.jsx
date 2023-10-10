import React, { useState } from "react";

import Skeleton from "@mui/material/Skeleton";
import ClipLoader from "react-spinners/ClipLoader";
import TrendCardIconMovie from "../../icons/CardMovieIcon";
import { Link } from "react-router-dom";

import classes from "./MoviePagination.module.css";

function MoviePagination({ movies, movieortvstate = "movie", pageHeading }) {

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const baseImgUrl = "https://image.tmdb.org/t/p";

  

  const handleImageLoader = function () {
    setIsImageLoaded(true);
  };
  
  
  return (
    <div className={classes["movie_pagination_container"]}>
      <h1>{pageHeading}</h1>

      <div className={classes["movie_pagination_wrapper"]}>
        {movies.map((movie, id) => (
          <div className={classes["trend-card-wrapper"]} key={id}>
            {console.log(movie.id)}
            {isImageLoaded ? (
              <Link to={`/${movieortvstate}/${movie.id}`}>
                <img
                  src={`${baseImgUrl}/original/${movie.backdrop_path}`}
                  alt=""
                  // onClick={() => navigateToMovieDetails(movie.id)}
                />
              </Link>
            ) : (
              <div style={{ display: ` ${isImageLoaded ? "none" : "block"}` }}>
                <Skeleton
                  sx={{ height: 220, width: 400 }}
                  animation="wave"
                  variant="rectangular"
                />

                <img
                  src={`${baseImgUrl}/original/${movie.backdrop_path}`}
                  alt=""
                  onLoad={handleImageLoader}
                  style={{ display: "none" }} // Hide the image until it's loaded
                />
              </div>
            )}

            <div className={classes["year-wrapper"]}>
              <span>
                {new Date(
                  movie.release_date || movie.first_air_date
                ).getFullYear()}
              </span>
              <TrendCardIconMovie style={{ color: "#fff" }} />
              <span>{movie.media_type}</span>
            </div>
            <h2>{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviePagination;
