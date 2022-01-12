// hooks use other hooks
import { useState, useEffect } from 'react';
const localCache = {}

//make a local cache which is an empty obj so if you select cat, if you get tabby/black and you switch
// to dog and get poodle, and doodle, and then you switch back to cat, we don't need to re request cat

export default function useBreedList(animal){
    const [breedList, setBreedList] = useState([]); // has an empty array
    const [status, setStatus] = useState('unloaded'); // an enumerated type. the str represents the state of the hook. If no ones ever claled it before, it's unloaded, if it's currently loading, it's loading, and loaded is loaded

    useEffect(() =>{
        if(!animal){
            // if no animal
            setBreedList([]); // setBreedList to empty
        } else if (localCache[animal]){
            setBreedList(localCache[animal])
        } else{
            requestBreedList();
        }

        async function requestBreedList(){
            setBreedList([]);
            setStatus('loading');

            const res = await fetch(
                `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
                // where {animal} is the animal we got back from the user
            )
            const json = await res.json();
            // where json is whatever we got back form the api
            localCache[animal] = json.breeds || [];
            // ^ cause we want to save that api request and we have the empty arr [] cause if the api crashes, the worst thing the user would recieve would be an empty arr
            setBreedList(localCache[animal]);
            setStatus('loaded');
        }


    }, [animal]) // this tells react we want to run requestBreedLIst everyitme a user inputs a new animal

    return[breedList, status];


}