import React from 'react';

class NewsLetterForm extends React.Component {
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
        const mail = this.state.text;
        const validateEmail = (email) => {
            return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
            };
            
            if (validateEmail(mail)) {
                alert('ok')
            } else {
                alert('nope')
            }
            
        }
        
        render(){
            console.log('Déclenchement du render', this.state);
            return (
                <div>
                <input type="mail" placeholder="Email@" onChange={this.handleInputChange.bind(this)}/>
                <button onClick={this.handleButtonClick.bind(this)}>Envoyer</button>
                </div>
                );
            }
        }
        
        export default NewsLetterForm;