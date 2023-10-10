import React, { useState } from "react";
import myImage from "../../assets/steven-libralon-Do1GQljlNk8-unsplash.jpg";
import classes from "./DetailedMovie.module.css";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import { pink } from "@mui/material/colors";
import Skeleton from "@mui/material/Skeleton";

function DetailedMovie({ movieDetails, movieCasts }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const baseImgUrl = "https://image.tmdb.org/t/p";
  const handleImageLoader = function () {
    setIsImageLoaded(true);
  };
  const value = 3.4;
  return (
    <div className={classes["detailed_container"]}>
      {isImageLoaded ? (
        <div>
          <img
            src={`${baseImgUrl}/original/${movieDetails.poster_path}`}
            alt=""
          />
        </div>
      ) : (
        <div style={{ display: ` ${isImageLoaded ? "none" : "block"}` }}>
          <Skeleton
            sx={{ height: 600, width: "100%" }}
            animation="wave"
            variant="rectangular"
          />

          <img
            src={`${baseImgUrl}/original/${movieDetails.backdrop_path}`}
            alt=""
            onLoad={handleImageLoader}
            style={{ display: "none" }} // Hide the image until it's loaded
          />
        </div>
      )}
      <div>
        <div className={classes["text-wrapper"]}>
          <h2> {movieDetails.original_title}</h2>
          <p>{movieDetails.tagline}</p>
        </div>
        <div className={classes["rating-wrapper"]}>
          <h3>{parseFloat((movieDetails.vote_average / 2).toFixed(1))}</h3>{" "}
          <Rating
            name="text-feedback"
            value={parseFloat((movieDetails.vote_average / 2).toFixed(1))}
            readOnly
            precision={0.5}
            sx={{ color: pink[300] }}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
        </div>
        <div className={classes["status-container"]}>
          <div>
            <p className={classes["status-keyword"]}>Length</p>
            <p className={classes["status-text"]}>
              {movieDetails.runtime} min&#46;
            </p>
          </div>
          <div>
            <p className={classes["status-keyword"]}>Language</p>
            <p className={classes["status-text"]}>
              {movieDetails.spoken_languages[0]?.name || "English"}
            </p>
          </div>
          <div>
            <p className={classes["status-keyword"]}>Year</p>
            <p className={classes["status-text"]}>
              {new Date(
                movieDetails.release_date || movieDetails.first_air_date
              ).getFullYear()}
            </p>
          </div>
          <div>
            <p className={classes["status-keyword"]}>Status</p>
            <p className={classes["status-text"]}>
              {movieDetails.status || "N/A"}
            </p>
          </div>
        </div>
        <div className={classes["generes-wrapper"]}>
          <h3>Genres</h3>
          <div>
            {movieDetails.genres.map((genere, i) => (
              <span key={genere.id + i}>{genere.name}</span>
            ))}
          </div>
        </div>
        <div className={classes["synopis-wrapper"]}>
          <h3>Synopis</h3>
          <p>{movieDetails.overview}</p>
        </div>
        <div className={classes["casts-container"]}>
          <h3>Casts </h3>
          <div className={classes["casts-wrapper"]}>
            {movieCasts.cast.map((cast, id) => (
              <span key={cast.id}>{cast.name}</span>
            ))}
          </div>
        </div>
        <div className={classes["links-wrapper"]}>
          <a href={movieDetails.homepage} target="_blank" rel="noreferrer">
            Website
          </a>
          <a
            href={`https://www.imdb.com/title/${movieDetails.imdb_id}/`}
            rel="noreferrer"
            target="_blanks"
          >
            Tmdb
          </a>
        </div>
      </div>
    </div>
  );
}

export default DetailedMovie;
