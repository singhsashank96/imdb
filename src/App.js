
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from './components/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/MovieList';
import MovieDetils from './components/movieDetails/movie';
import Movie from './components/movieDetails/movie';

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <Routes>
      <Route   index element={< Home />}       />
        <Route   path="movie/:id" element={<Movie/>}    />
        <Route   path="movies/:type"element={<MovieList />}    />
        <Route   path="/*"  element={<h1>Error Page</h1>}    />

      </Routes>
    </Router>
    </div>
  );
}

export default App;
