import React from 'react';
import axios from 'axios';

class Fortune extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            fortune: ''
        }
    }

    async componentDidMount() {
        const response = await axios.get('https://my-little-cors-proxy.herokuapp.com/http://yerkee.com/api/fortune');
        this.setState({
            fortune: response.data.fortune
        })
    }


    render() {
        return (
            <div style={{marginTop: '20px'}}>
                {
                    this.state.fortune ? 'Fortune of the day: ' + this.state.fortune : null
                }
            </div>
        )
    }

}


export default Fortune;