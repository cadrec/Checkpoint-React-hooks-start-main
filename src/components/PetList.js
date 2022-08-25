import React from 'react';
import SinglePet from './SinglePet';

const cody = {
  id: 2,
  name: 'Cody',
  description: 'Adorable pug who loves to hug',
  species: 'dog',
};

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
function PetList(props) {
  const [current, setcurrent] = React.useState('all')

  const changeState = (event) => {
    setcurrent(event.target.value)
  }

  return (
    <>
        <select value={current} onChange={changeState}>
        <option value='all'>All</option>
        <option value='cat'>Cats</option>
        <option value='dog'>Dogs</option>
        </select>
      <div className="pet-list">
        {current === 'all' ? props.pets.map(
          pet => <SinglePet key={pet.id} pet={pet}/>) :
          props.pets.map(pet => {
            if (pet.species === current ) {
              return <SinglePet key={pet.id} pet={pet}/>
            }
          })
        }
      </div>

    </>
  )
}

export default PetList;
