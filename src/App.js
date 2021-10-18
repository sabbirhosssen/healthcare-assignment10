
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import FindDoctor from './Components/FindDoctor/FindDoctor';
import Fasality from './Components/Fasality/Fasality';




function App() {
  return (
    <div className="App">


      <Router>
        <Header></Header>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/service">


          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Fasality></Fasality>
        <FindDoctor></FindDoctor>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
