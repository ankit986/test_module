import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

export  class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name:'',
      number:''
    }
  
  this.printStateInfo =  this.printStateInfo.bind(this);
  this.fetchData =  this.fetchData.bind(this);
  this.postData =  this.postData.bind(this);
    
  }

  baseUrl = `http://${window.location.hostname}:8000/contacts`;


  fetchData(){
    console.log(this.baseUrl);

    console.log("inside fetchmetehod");
   
    fetch(this.baseUrl, {
      "method": "GET",
      
    }).then(response => response.json())
        .then(response => {
          console.log(response)
        })
        .catch(err => {
          console.log(err);
        });
  }

  postData(){
    var url =this.baseUrl;
    fetch(url,{
      "method":"POST",
      "headers": {
       
        "content-type": "application/json",
        "accept": "application/json"
      },
      "body": JSON.stringify({
        "name": this.state.name,
        "number": this.state.number
    })
    }).then(response => response.json())
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err);
    });

  }

  printStateInfo() {
    console.log(this.state);
    console.log(`name  ${this.state.name} number ${this.state.number}`);
  }

render(){
  return (
    <div className="App">
      <header className="App-header">
         <div >
            <input value={this.state.name}  type="text" placeholder="Enter Your Name" onChange={e => this.setState({name:e.target.value  })} />
          </div>
        <div >
            <input value={this.state.number} type="text" placeholder="Enter Mobile Number" onChange={e => this.setState({ number : e.target.value })} />
          </div>
          <div>
            <button onClick={this.postData}>Post</button>
            <button onClick={this.fetchData}>Fetch</button>

          </div>
      </header> 
    </div>
  );
}}

export default App;
