import React from 'react';

class TestForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: "",
            count: 0
        };
    }

    handleInputChange(event) {
        console.log('handleInputChange', this.state);
        const value = event.target.value;

        this.setState({
            text: value
        });
    }

    handleButtonClick(event) {
        alert(this.state.text)
    }

    render(){
        console.log('Déclenchement du render', this.state);
        return (
            <div>
                <input type="text" onChange={this.handleInputChange.bind(this)}/>
                <button onClick={this.handleButtonClick.bind(this)}>Afficher l'alerte</button>
            </div>
        );
    }
}

export default TestForm;