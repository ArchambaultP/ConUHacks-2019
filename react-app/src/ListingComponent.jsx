import React from 'react'
import axios from 'axios'


class ListComponent extends React.Component {
  
  test() {
    axios.get('http://localhost:3000/api/posts').then((result) => {
      console.log(result);
    })
  }
    render() {
      return (
        <div>
        <h1>Hello World</h1>
        <button onClick={ this.test }>test</button>
        </div>
      );
    }
  }

  export default ListComponent;