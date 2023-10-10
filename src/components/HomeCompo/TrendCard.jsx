import React, { useState } from "react";
import myImage from "../../assets/steven-libralon-Do1GQljlNk8-unsplash.jpg";
import classes from "./TrendCard.module.css";
import IconBxsMovie from "../../icons/Movie";
import IconMovie2Fill from "../../icons/MyMovie";
import Skeleton from "@mui/material/Skeleton";
import ClipLoader from "react-spinners/ClipLoader";
import TrendCardIconMovie from "../../icons/CardMovieIcon";
import { Link } from "react-router-dom";

function TrendCard({ moviesOrSeries, movieortvstate = "movie" }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const baseImgUrl = "https://image.tmdb.org/t/p";
  console.log("the trend card movies:", moviesOrSeries);
  const handleImageLoader = function () {
    setIsImageLoaded(true);
  };
  const movieYear = new Date("2023-08-09");
  console.log(movieYear);
  return (
    <div className={classes["trend-movie-container"]}>
      {moviesOrSeries?.map((movie, index) => {
        return (
          <div className={classes["trend-card-wrapper"]}>
            {console.log(movie.id)}
            {isImageLoaded ? (
              <Link to={`${movieortvstate}/${movie.id}`}>
                <img
                  src={`${baseImgUrl}/original/${movie.backdrop_path}`}
                  alt=""
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
              <span>{movieortvstate}</span>
            </div>
            <h2>{movie.title}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default TrendCard;
