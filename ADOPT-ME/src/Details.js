// like if i click on luna, i want to see all the details about luna
import { Component } from "react";
// by default, react router doesn't pass in all the information to the details component
// we need to say please give us this info. we do that by wrapping details at the bottom with withRouter
import { withRouter } from "react-router-dom";

// we'll have a class represent a component
// class components have lifecycle methods and they work similar to function components

// a class component always has a render method
// render method works the same as a function body, it return some sort of markup
// sometimes function components are better than class components and vice versa

import Carousel from './Carousel';

class Details extends Component {
    // how to create state: with class components you have a state obj that you refer to
    // constructor gets run when you create a new instance of a class
    // must have a super in constructor
    
        // when you instantiate a new instance of a class, this is where you set up
        // 'this' refers to the detailed ocmponent we are working on 
        // component didMount which gets run at the beginning of every component being rendered
        state = { loading: true };  // default state: whenever we create a state it'll be loading state


    // class components have something claled life cycle methods
    // compontnDidMount gets called when the react component is rendered for hte first time
    // as soon as someone goes to /detail/one, it'll render for the first time
    // when this ifrst page is first claled, we want to fetch the data for the pet render


    async componentDidMount (){
        const res = await fetch(
            // match and param ocme from react router
            // the match and the params are (in App.js)
            // if we want a dog of id 3, we get it from the match path
            // the params or parameters from the user 
            `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
        );
        const json = await res.json();
            
            this.setState(Object.assign({ // setState takes this object you're giving it and merges it with the state you have
                loading: false,
                name: json.pets[0].name
                // we get a bunch of state back from the api 
            }, json.pets[0]))

             // want to set faulse because now everything is loaded

    }
    render() {
        // if the state is loading, then show the loading below
        // there are quite a few life cycle methods 
        // class components are mostly only way to get lifecycle components
        // can use effect to get most lifecycle methods 
        if (this.state.loading){
            return <h2>loading ...</h2>
        }
        const {animal, breed, city, state, description, name, images} = this.state;
        return (
            <div className = "details">
                <Carousel images={images}/>
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
                    <button>Adopt {name}</button>
                    <p>{description}</p>
                </div>

            </div>
        )
    }

}

export default withRouter(Details);