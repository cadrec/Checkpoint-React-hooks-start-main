import React from 'react';
import PetList from './PetList';
import axios from 'axios'
// We'll render these sample pets for now. Later, we'll instead fetch the list
// of pets from the server! We won't need samplePets after that.
//import samplePets from '../petdata';


const Root = () => {
  const [petList, setPetList] = React.useState([]);

  // const {id} = React.useParams();

  React.useEffect(() => {
    async function returnPets() {
      try {
        const {data} = await axios.get('/api/pets');
        setPetList(data);
      } catch (err) {
        console.error("Error!", err)
      }
    }
    returnPets();
  },[])

  if (petList.length === 0) {
    return <>Loading...</>
  }

  return (
    <>
      <h1>Adoption Center</h1>
      <PetList pets={petList} />
    </>
  )
}

export default Root;