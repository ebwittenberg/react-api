import React from 'react';

function Character({data}) {

    return (

        <ul style={{margin: '0'}}>
            <h3>{data.name ? data.name : 'Name unknown'}</h3>
            <li>Born: {data.born}</li>
            <li>Died: {data.died}</li>
            <li>Culture: {data.culture}</li>
        </ul>
    )


}



export default Character;