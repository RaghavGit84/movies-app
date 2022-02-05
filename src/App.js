import logo from './logo.svg';
import Navbar from './components/Navbar';
import Banners from './components/Banners';
import Movies from './components/Movies';
import Favourite from './components/Favourite';
import { BrowserRouter as Router,Switch,Route, BrowserRouter} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact render={(props)=>(
            <>
              <Banners {...props} />
              <Movies {...props} />
            </>
          )}/>
          <Route path='/Favourite' component={Favourite}/>
        </Switch>
         
        {/* <Banners/>
        <Movies/>
        <Favourite/> */}
    </Router>
  );
}

export default App;
