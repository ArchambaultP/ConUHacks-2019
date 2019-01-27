import React from 'react'
import axios from 'axios'
import { ListGroup, ListGroupItem, View, Button } from "react-bootstrap";

class ListComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }
  
  componentWillMount() {
    this.test();
  }
  test() {
    axios.get('http://localhost:8000/getProduce').then((result) => {
      // console.log(result.data);
      // this.setState({data: result.data});

      var arr = [];
      for (var i = 0; i < result.data.length; i++) {
        console.log(result.data[i]);
        arr.push(result.data[i].name);
      }
      this.setState({data: arr});
      
    })
  }
    render() {
      if (!this.state.data) {
        return <div />
      }

      return (
        <div> 
          <ListGroup>
           {this.state.data.map(r => <ListGroupItem>{r}</ListGroupItem>)}     
          </ListGroup>;  
        </div>
      );
    }
  }

  export default ListComponent;