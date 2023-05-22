import React from 'react';
import "./App.css";
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Home from "./Home";
//import ParticleBackground from './ParticleBackground';

class App extends React.Component{

    render() {
      return(
            <BrowserRouter >
                <div>
                    {/*<ParticleBackground/>*/}
                    <Switch>
                        <Route exact path='/' component={Home}/>
                    </Switch>
                 </div>
            </BrowserRouter>
  )
 }
};

export default App;
