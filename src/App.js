import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route}from "react-router-dom";
import Home from './Component/Home/Home';
import Error from './Component/Error/Error';
import Header from './Component/Header/Header';
import Contact from './Component/Contact/Contact';
import TeamDetails from './Component/TeamDetails/TeamDetails'
import TeamList from './Component/TeamList/TeamList'



function App() {
  return (
    <div className="App">
          <Router>
              <Header></Header>
              <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/home"><Home/></Route>
                    <Route path="/teamList"><TeamList/></Route>
                    <Route path="/teamDetails/:teamId"><TeamDetails/></Route>
                    <Route path="/contact"><Contact/></Route>
                    <Route path="/*"><Error/></Route> 
              </Switch>
          </Router>
      
    </div>
  );
}

export default App;
