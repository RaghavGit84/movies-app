import logo from './logo.svg';
import Navbar from './components/Navbar';
import Banners from './components/Banners';
import Movies from './components/Movies';
import Favourite from './components/Favourite';
import './App.css';

function App() {
  return (
    <>
      <Navbar/>
      {/* <Banners/>
      <Movies/> */}
      <Favourite/>
    </>
  );
}

export default App;
