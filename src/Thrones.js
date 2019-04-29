import React from 'react';
import axios from 'axios';
import Character from './Character';

class Thrones extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            characters: [],
            pageNumber: 1
        }
    }

    async componentDidMount() {
        const response = await axios.get(`https://www.anapioficeandfire.com/api/characters?page=${this.state.pageNumber}&pageSize=20`);
        console.log(response);
        this.setState({
            characters: response.data
        })
    }

    render() {
        console.log(this.state.pageNumber);
        return (
            <div>
                <button onClick={this._toFirstPage}>First page</button>
                <button onClick={this._decrementPageNumber}>Previous</button>
                <button onClick={this._incrementPageNumber}>Next</button>
                <button onClick={this._toLastPage}>Last page</button>
                <h3>Page: {this.state.pageNumber}</h3>
                {
                    this.state.characters.map(c => <Character data={c} />)
                }
            </div>
        )
    }

    _incrementPageNumber = () => {
        this.setState({
            pageNumber: this.state.pageNumber + 1
        }, this._getCharacterInfo)
    }

    _decrementPageNumber = () => {
        if (this.state.pageNumber > 1) {
            this.setState({
                pageNumber: this.state.pageNumber - 1
            }, this._getCharacterInfo)
        }
    }

    _toFirstPage = () => {
        this.setState({
            pageNumber: 1
        }, this._getCharacterInfo)
    }

    _toLastPage = () => {
        this.setState({
            pageNumber: 107
        }, this._getCharacterInfo)
    }



    _getCharacterInfo = async () => {
        console.log('getting character info');
        const response = await axios.get(`https://www.anapioficeandfire.com/api/characters?page=${this.state.pageNumber}&pageSize=20`);
        this.setState({
            characters: response.data
        })
    }


}



export default Thrones;