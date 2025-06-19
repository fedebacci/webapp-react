// # IMPORTS
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DefaultLayout from "./layouts/DefaultLayout";

import pages from "./assets/js/data/pages";
import HomePage from './pages/HomePage';
import MoviesIndexPage from './pages/movies/MoviesIndexPage';
import MovieShowPage from './pages/movies/MovieShowPage';
import MovieAddPage from './pages/movies/MovieAddPage';
import NotFoundPage from './pages/NotFoundPage';

import { LoaderProvider } from './contexts/LoaderContext';



function App() {
  return (
    <>
      <LoaderProvider>
        <BrowserRouter>
          <Routes>
            
            <Route element={<DefaultLayout />}>
              <Route index element={<HomePage />} />

              <Route path={pages.MOVIES()}>
                <Route index element={<MoviesIndexPage />} />
                <Route path={pages.SHOWMOVIE(":id")} element={<MovieShowPage />} />
                <Route path={pages.ADDMOVIE()} element={<MovieAddPage />} />
              </Route>

              <Route path='*' element={<NotFoundPage />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </LoaderProvider>
    </>
  );
};



export default App;