import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router,Switch,Route,Link  } from 'react-router-dom';
import './App.css';
import './Components/vehicle_list'
import './Components/create_vehicle'
import './Components/edit_vehicle'
import create_vehicle from './Components/create_vehicle';
import vehicle_list from './Components/vehicle_list';
import edit_vehicle from './Components/edit_vehicle';

class App extends Component{
    render(){
        return(
        <Router>
        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
            </button>
         <div class="collapse navbar-collapse" id="navbarNav">
             <ul class="navbar-nav">
                    <li className="nav-item active">
                          <Link to={'/create_vehicle'} className="nav-link">Create Vehicle</Link>
                    </li>
                    <li className="nav-item">
                          <Link to={'/edit_vehicle'} className="nav-link">Edit Vehicle</Link>
                    </li>
                    <li className="nav-item">
                          <Link to={'/vehicle_list'} className="nav-link">Vehicle List</Link>   
                    </li>
                  
             </ul>
        </div>
        </nav>
        <br/>
        <Switch>
            <Route exact path="/" component = {create_vehicle}/>
            <Route exact path="/create_vehicle" component = {create_vehicle}/>
            <Route exact path="/edit_vehicle" component= {edit_vehicle}/>
            <Route exact path="/vehicle_list" component = {vehicle_list}/>
        </Switch>
        </div>
        </Router>
        )
    }
}



export default App;
