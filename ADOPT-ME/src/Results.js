import Pet from './Pet'
// we want props out of pets so by putting pets in {}, we can destructure as pets
// this will pull it from the props object something called pets and call it pets
const Results = ({ pets }) => {
    return (
        <div className='search'>
            {!pets.length ?  (
                <h2>No Pets Found</h2>
            ) : (
                pets.map((pet) => (
                    <Pet
                        animal = {pet.animal}
                        key = {pet.id}
                        name = {pet.name}
                        breed= {pet.breed}
                        images = {pet.images}
                        location={`${pet.city}, ${pet.state}`}
                        id = {pet.id}
                    />
                ))
            )}
        </div>

    )
}

export default Results