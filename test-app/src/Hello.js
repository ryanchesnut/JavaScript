import React from 'react'; 

class Hello extends React.Component {
    render() {
        return <h1> Hello World! {this.props.name}</h1>
    }
}

export default Hello; 