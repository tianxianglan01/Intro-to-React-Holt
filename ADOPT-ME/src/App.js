import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet'
import SearchParams from './SearchParams'
import Details from './Details';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

/*
const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {name: "Luna", animal: "Dog", breed: "Havanese"}),
        React.createElement(Pet, {name: "Pepper", animal: "Bird", breed: "Parrot"}),
        React.createElement(Pet, {name: "Sudo", animal: "Dog", breed: "Wheaten Terrier"}),
    ]);
};
*/


// "/details/:id": the colon is how you do variables inside your route
// when we go to localhost:1234/details/1: unfortunately it still renders both components
// this is because it's similar to regex (left hand wise) where if both routes match (/ and details), it'll render oth components
// to get around this we use a component we imported above called 'Switch'
const App = () =>{
    return (
    <div>
        
        <Router>
        <header>
            <Link to= "/">
                <h1>Adopt Me!</h1>
            </Link>
        </header>
            <Switch>
            <Route path="/details/:id">
                
                <Details/>
            </Route>
            <Route>
                <Route path = "/">
                    <SearchParams />
                </Route>
            </Route>
            </Switch>
        </Router>

    </div>
    );

};


ReactDOM.render(<StrictMode><App/></StrictMode>, document.getElementById('root'));