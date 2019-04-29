import React from 'react';

function Character({data}) {

    return (

        <ul>
            <li>Born: {data.born}</li>
            <li>Died: {data.died}</li>
            <li>Culture: {data.culture}</li>
        </ul>
    )


}



export default Character;