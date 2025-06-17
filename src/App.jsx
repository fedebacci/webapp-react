// # IMPORTS
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import pages from "./assets/js/data/pages";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from './pages/HomePage';
import MoviesIndexPage from './pages/movies/MoviesIndexPage';
import MovieShowPage from './pages/movies/MovieShowPage';


function App() {
  // # USE STATE EXAMPLE
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />

            <Route path={pages.MOVIES()}>
              <Route index element={<MoviesIndexPage />} />
              <Route path={pages.SHOWMOVIE(":id")} element={<MovieShowPage />} />
            </Route>

            {/* <Route path='*' element={<NotFoundPage />} /> */}
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
};



export default App;