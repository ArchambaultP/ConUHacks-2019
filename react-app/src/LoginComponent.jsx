import React from 'react'
import './Login.css';
import FadeIn from 'react-fade-in';

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
  
    handleSubmit(event) {
        console.log(event.target[0].value);
        console.log(event.target[1].value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className = "Bigbox" >
        <FadeIn> 
          <div className = "box">
        <form onSubmit={this.handleSubmit}>
          <h1 className = "SI">Sign-in</h1>
          <label className= "name">
            Name:
            <input type="text" />
          </label><br></br>
          <label className="Password">
            Password:
            <input type="text" />
          </label><br></br>
          <input type="submit" value="Submit" />
        </form>
        </div>
        </FadeIn>
        </div>
      );
    }
  }

  export default SignupComponent;
