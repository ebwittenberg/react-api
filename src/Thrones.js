import React from 'react';
import axios from 'axios';
import Character from './Character';

class Thrones extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            characters: []
        }
    }

    async componentDidMount() {
        const response = await axios.get('https://www.anapioficeandfire.com/api/characters?page=1&pageSize=20');
        console.log(response);
        this.setState({
            characters: response.data
        })
    }

    render() {
        console.log(this.state.characters);
        return (
            <div>
                {
                    this.state.characters.map(c => <Character data={c}/>)
                }
            </div>
        )

    }


}



export default Thrones;