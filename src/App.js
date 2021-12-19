import logo from './logo.svg';
import './App.css';
import Homepage from "./pages/Homepage";
import {Route, NavLink, Switch} from "react-router-dom";
import Subpost from "./pages/Subpost";


function App() {
  return (
    <div className="App">
        testApp
        <NavLink to='/'/>
        <NavLink to='/Subpost/:id'/>

        <Switch>
            <Route exact path='/'>
                <Homepage/>
            </Route>
            <Route path='/Subpost/:id'>
                <Subpost/>
            </Route>
        </Switch>

    </div>
  );
}

export default App;
