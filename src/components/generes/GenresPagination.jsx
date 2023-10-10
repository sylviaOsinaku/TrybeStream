import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import MoviePagination from "../HomeCompo/MoviePagination";
import classes from "../HomeCompo/MoviePagination.module.css";
function GenresMoviePage() {
  const [page, setPage] = React.useState(1);
  const [seriesPageData, setseriesPageData] = useState([]);
  const { genreId, name } = useParams();
  const handleChange = (event, value) => {
    console.log(event);
    console.log(genreId);
    console.log(value);
    setPage(value);
  };

  const getTrendingMovies = useCallback(
    async function () {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genreId}`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDBhYTU5MTU0YzQ5MDgwMGU1OGM4ZmFjZGRjOTY2YyIsInN1YiI6IjY0NzliOGU2ZTMyM2YzMDBhN2Q0ZTcxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fg3OBEqMzOlMwGwkHJZO7Un-ReTWYVt9LIp3gP0dfhE",
            },
          }
        );
        if (!response.ok) {
          console.log("Http error detected", response.status);
          throw new Error("Error Found");
        }
        console.log(response);
        const theMovies = await response.json();
        console.log(theMovies);
        setseriesPageData(theMovies?.results);
      } catch (err) {
        console.log(err);
      }
    },
    [page, genreId]
  );

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getTrendingMovies();
    }
    return () => (mounted = false);
  }, [getTrendingMovies]);

  return (
    <Stack spacing={"2"}>
      <MoviePagination movies={seriesPageData} pageHeading={name} />
      <div className={classes["pagination-wrapper"]}>
        <Pagination
          count={1000}
          page={page}
          onChange={handleChange}
          color="secondary"
          shape="rounded"
        />
      </div>
    </Stack>
  );
}

export default GenresMoviePage;
