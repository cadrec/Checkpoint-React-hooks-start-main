import React from 'react';

function SinglePet(props) {
  const [adoptionStatus, setAdoptionStatus] = React.useState(false);

React.useEffect(() => {
  localStorage.setItem(props.pet.name, adoptionStatus);
}, [adoptionStatus])


  return (
    <div className={'single-pet'}>
      <h1>{props.pet.name}</h1>
      <p>{props.pet.species}</p>
      <p>{props.pet.description}</p>
      <button onClick={() => {
          setAdoptionStatus(!adoptionStatus)}}>Toggle Status
      </button>
      <p>{adoptionStatus ? "Adopted" : "Available"}</p>
    </div>
  );
}

export default SinglePet;