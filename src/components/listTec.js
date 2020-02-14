import React, { Component } from 'react'

class ListTec extends Component {
    state = {
        newTech: '',
        techs: [
            'Node.js',
            'ReactJS',
            'ReactNative'
        ]
    }
    handleInputChange = e => {
        this.setState({newTech: e.target.value})
    }
    handleButtonSubmit = e => {
        e.preventDefault()
        this.setState({techs: [...this.state.techs, this.state.newTech], newTech: ''})

    }
    render() {
        return(
        <form onSubmit={this.handleButtonSubmit}>
            <ul>
            {this.state.techs.map((tech, index) =>
                <li key={index}>{tech}</li>
            )}
            </ul>
            <input type="text" onChange={this.handleInputChange} value={this.state.newTech}/>
            <button type="submit">Enviar</button>
        </form>
        
        );
    }
}

export default ListTec;