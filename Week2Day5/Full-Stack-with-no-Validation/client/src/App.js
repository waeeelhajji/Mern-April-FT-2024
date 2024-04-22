
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from "../src/components/Main"
import OneMovie from "../src/components/OneMovie"
import CreateMovie from "../src/components/CreateMovie"
import UpdateMovie from "../src/components/UpdateMovie"

function App() {
  return (
    <div className="App">
      <h1>Movies App 📺😎</h1>
      <Link to="/">AllMovies</Link><p></p>
      <Link to="/movies/create">Create Movie</Link> 

      <Routes>
        {/* DASHBOARD */}
        <Route path="/" element={<Main />} />
        {/* READ ONE */}
        <Route path="/movies/:id" element={<OneMovie />} />
        {/* CREATE */}
        <Route path="/movies/create" element={<CreateMovie />} />
        {/* UPDATE */}
        <Route path="/movies/:id/update" element={<UpdateMovie />} />
      </Routes>
      
    </div>
  );
}

export default App;
