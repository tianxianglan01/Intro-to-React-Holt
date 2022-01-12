// homepage where people can search for things
import { useState, useEffect } from "react";
import useBreedList from './useBreedList';
import Results from './Results';
// useState is a hook that allows you to add state to your components

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

const SearchParams = () => {
    // i do believe all the const useStates represent a hook
    const [location, setLocation] = useState("");
    // Seattle, WA is a placeholder
    const [animal, setAnimal] = useState("")
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]) // array of all pets from api
    const [breeds] = useBreedList(animal);
    useEffect(() => {
        // put all of your async code
        requestPets();
    }, [animal]);
    // request this and give it back to us
    // fetch is a browser api

    // if we don't put the ', []' above, it says "when should we run it" and runs it once at the beginning. 
    // and then you're telling it: when do you want it to run again? Otherwise it reruns at every render (page refresh?)
    // by plaicng animal in the '[]', we tell it to refresh the api everytime 'animal' updates

    async function requestPets(){
        const res = await fetch(
            // not single quotes, back-ticks
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();
        // this json above will be whatever we get back from the api
    
        setPets(json.pets);
    }

    return (
        // use className instead of class cause class is reserved
        // form is used to collect a userinput (like input name in a box)
        // htmlFor returns the value of the for attribute (the id which is 'location')
        // input: box where user puts in an input
        // onChange (so when user inputs a value)
        // e.target.value is the value entered into the input
        // placeholder reserves space for content that will appear in the layout
        // htmlFor is the label and its value must be the same as the input's id
        // on blur highlights the input box
        // when you submit a form, you have to prevent it from submitting or it's oging ot refresh the page so we use e.preventDefault()
        <div className = "search-params">
            
            <form 
                onSubmit={(e) => {
                    e.preventDefault();
                    requestPets();
                }}
            >
                <label htmlFor="location">
                    Location
                    <input id="location"
                        onChange = {e => setLocation(e.target.value)} 
                        value ={location} 
                        placeholder="Location" 
                    />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={e => setAnimal(e.target.value)}
                        onBlur={e => setAnimal(e.target.value)}
                    >
                       <option />
                            {
                                ANIMALS.map(animal => (
                                  <option value = {animal} key={animal}>
                                      {animal}
                                  </option>  
                                ))
                            }
                    </select>
                </label>
                <label htmlFor="breed">
                    breed
                    <select
                        id="breed"
                        value={breed}
                        onChange={e => setBreed(e.target.value)}
                        onBlur={e => setBreed(e.target.value)}
                    >
                       <option value =""></option>
                            {breeds.map((breed) => (
                                  <option value={breed} key={breed}>
                                      {breed}
                                  </option>  
                                ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
            <Results pets = {pets}/>
               
        </div>

    );
};

export default SearchParams;
// in python you don't have to specify a variable or a function to call from another file,
// in js you have to specify a function to export default in order for another file to access said function 

// currently we can't update the value of location,
// everytime react detects a change, it reruns its render cycle 
// so we have to give it the ability to update itself. THis is done by importing 
// usestate is what is called a hook which allows us to keep track of state, all hooks beging with 'use'