import React, { useEffect, useState, useCallback } from "react";

import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import MoviePagination from "./MoviePagination";
import classes from "./MoviePagination.module.css";
function OnAirSeriesPagination() {
  const [page, setPage] = React.useState(1);
  const [OnAirSeriesData, setOnAirSeriesData] = useState([]);

  const handleChange = (event, value) => {
    console.log(event);

    console.log(value);
    setPage(value);
  };

  const getOnAirSeris = useCallback(
    async function () {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=${page}`,
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
        setOnAirSeriesData(theMovies?.results);
      } catch (err) {
        console.log(err);
      }
    },
    [page]
  );

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getOnAirSeris();
    }
    return () => (mounted = false);
  }, [getOnAirSeris]);

  return (
    <Stack spacing={"2"}>
      <MoviePagination
        movies={OnAirSeriesData}
        movieortvstate="tv"
        pageHeading="On Air Series"
      />
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

export default OnAirSeriesPagination;
