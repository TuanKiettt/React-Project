import './css/App.css';
import Favorite from './page/Favorite';
import Home from './page/Home';
import Navbar from './components/Navbar.jsx';
import { Routes, Route } from 'react-router-dom';
import { MovieProvider } from './contexts/MovieContext';
import Login from './page/Login.jsx';


function App() {


  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/favorite" element = {<Favorite/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
