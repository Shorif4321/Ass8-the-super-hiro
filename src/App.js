import logo from './logo.svg';
import './App.css';
import Header from './componend/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './componend/Footer/Footer';
import Home from './componend/Home/Home';
import NotFound from './componend/NotFound/NotFound';
import Services from './componend/Services/Services';
import About from './componend/About/About';
import Contact from './componend/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/service">
            <Services></Services>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/contact">
            <Contact></Contact>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
