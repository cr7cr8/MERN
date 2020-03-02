import React, { useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios'



class App extends Component {
  state = {
    date: "dummy",
    port: "dummy"
  }

  constructor(props) {
    super(props)
  }
  componentDidMount = () => {

    //axios.get("http://127.0.0.1/api")
    axios.get("/api")

      .then(result => {
        console.log(result)
        console.log(process.env)
        this.setState(pre => {
          return pre = result.data
        })

      })
      .catch(result => {

        //   this.setState(pre => {
        //     return pre.content = result.data
        //   })
      })

  }

  render() {
    return (

      <React.Fragment>
        <h1>1 {this.state.date}</h1>

        <h1>2  {this.state.port}  </h1>

        <h1>3 {process.env.NODE_ENV}</h1>
        <h1>4 {process.env.PORT}</h1>

        <h1>5 {process.env.REACT_APP_NAME} </h1>
      </React.Fragment>
    )


  }

}




function App2() {

  /////////////////////////////////////////////////////
  return (
    <React.Fragment>


      <h1>{process.env.REACT_APP_NAME}</h1>
    </React.Fragment>



  );
}

export default App;
