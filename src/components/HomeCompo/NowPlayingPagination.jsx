import React, { useEffect, useState, useCallback } from "react";
import MoviePagination from "./MoviePagination";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import classes from "./MoviePagination.module.css";

function NowPlayingMoviesPage() {
  const [page, setPage] = React.useState(1);
  const [nowPlayingPaginationData, setnowPlayingPaginationData] = useState([]);

  const handleChange = (event, value) => {
    
    setPage(value);
  };

  const getTrendingMovies = useCallback(
    async function () {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`,
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
      
        const theMovies = await response.json();
        
        setnowPlayingPaginationData(theMovies?.results);
      } catch (err) {
        console.log(err);
      }
    },
    [page]
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
      <MoviePagination
        movies={nowPlayingPaginationData}
        pageHeading="Now Playing"
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

export default NowPlayingMoviesPage;
