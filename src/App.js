
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import Services from './Components/Service/Services';
import Login from './Components/From/Login/Login';
import Aboutus from './Components/About/Aboutus';
import Contact from './Components/Contact/Contact';
import Register from './Components/From/Register/Register';
import FindDoctor from './Components/FindDoctor/FindDoctor';




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
          <Route path="/about">
            <Aboutus></Aboutus>
          </Route>
          <Route path="/doctor">
            <FindDoctor></FindDoctor>
          </Route>
          <Route path="/service">
            <Services></Services>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Register></Register>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

        <Footer></Footer>
      </Router>

    </div>
  );
}


export default App;
