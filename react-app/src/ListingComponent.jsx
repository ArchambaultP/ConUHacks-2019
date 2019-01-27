import React from 'react'
import axios from 'axios'


class ListComponent extends React.Component {
  
  componentDidMount() {
    this.test();
  }
  test() {
    axios.get('http://localhost:8000/getProduce').then((result) => {
      console.log(result);
    })
  }
    render() {
      return (
        <div>
        <h1>Hello World</h1>
        </div>
      );
    }
  }

  export default ListComponent;