import React from 'react'

class SignupComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '', value2: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    handleSubmit(event) {
        console.log(event.target[0].value);
        console.log(event.target[1].value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" />
            <input type="text"/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default SignupComponent;