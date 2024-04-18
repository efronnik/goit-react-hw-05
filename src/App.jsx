import {Routes, Route} from "react-router-dom";
import {lazy, Suspense} from "react";

import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";

const Home = lazy(() => import("./pages/HomePage/HomePage"));
const Movies = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetails = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFound = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const Cast = lazy(() => import("./components/MovieCast/MovieCast"));
const Reviews = lazy(() => import("./components/MovieReviews/MovieReviews"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
