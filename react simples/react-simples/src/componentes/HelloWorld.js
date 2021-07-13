import React from 'react';

class HelloWorld extends React.Component {

    render(){
    return <p>{this.props.nome}</p>
    }
}

export default HelloWorld;