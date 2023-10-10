import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Error from "./pages/Error";
import TheHome from "./pages/TheHome";
import TrendMoviePage from "./components/HomeCompo/TrendMoviePage1";
import TrendPopularMoviePage from "./components/HomeCompo/PopluarMoviePagination";
import NowPlayingMoviesPage from "./components/HomeCompo/NowPlayingPagination";
import UpcomingMoviePagination from "./components/HomeCompo/UpcomingPagination";
import TopRatedMoviesPagination from "./components/HomeCompo/TopRatedMoviePagination";
import TrendSeriesPage from "./components/HomeCompo/TrendingSeriesPagintion";
import PopularSeriesPagination from "./components/HomeCompo/PopularSeriesPagination";
import AiringTvSeries from "./components/HomeCompo/AiringSeries";
import AiringSeriesPagination from "./components/HomeCompo/AiringSeriesPagination";
import OnAirSeriesPagination from "./components/HomeCompo/OnAirSeriesPagination";
import TopRatedSeriesPagination from "./components/HomeCompo/TopRatedSeriesPagination";
import MovieDetail from "./pages/MovieDetail";
import TvDetail from "./pages/TvDetails";
import MovieGenre from "./pages/MovieGenres";
import GenresMoviePage from "./components/generes/GenresPagination";
import TvGenre from "./pages/TvGenres";
import GenresTvMoviePage from "./components/generes/GenresTvPgination";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <TheHome /> },

      { path: "trendingmovies", element: <TrendMoviePage /> },
      {
        path: "popularmovies",
        element: <TrendPopularMoviePage />,
      },
      {
        path: "nowplayingmovies",
        element: <NowPlayingMoviesPage />,
      },
      {
        path: "upcomingmovies",
        element: <UpcomingMoviePagination />,
      },
      {
        path: "topratedmovies",
        element: <TopRatedMoviesPagination />,
      },
      {
        path: "trendingseries",
        element: <TrendSeriesPage />,
      },
      {
        path: "popularseries",
        element: <PopularSeriesPagination />,
      },
      {
        path: "airingtodayseries",
        elememt: <AiringSeriesPagination />,
      },
      {
        path: "onairseries",
        element: <OnAirSeriesPagination />,
      },
      {
        path: "topratedseries",
        element: <TopRatedSeriesPagination />,
      },

      { path: "movie/:movieId", element: <MovieDetail /> },
      { path: "tv/:tvId", element: <TvDetail /> },
      {
        path: "moviesgenres",
        element: <MovieGenre />,
      },
      {
        path: "moviesgenres/:genreId/:name",
        element: <GenresMoviePage />,
      },
      {
        path: "tvgenres",
        element: <TvGenre />,
      },
      {
        path: "tvgenres/:genreId/:name",
        element: <GenresTvMoviePage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
