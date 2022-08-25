import React from 'react';

const DeletePet = (props) => {
    const [deleted, setDeleted] = React.useState(false);


    return (
        <button className='delete-pet' onClick={() => {
            DeletePet();
        }}>Delete Pet</button>
    )
}

export default DeletePet;

