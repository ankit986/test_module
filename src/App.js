import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'


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


  fetchData(){
    console.log("inside fetchmetehod");
    fetch("https://randomuser.me/api/", {
      "method": "GET",
      
    }).then(response => response.json())
        .then(response => {
          console.log(response.results[0].cell)
          console.log(`${response.results[0].name.title} ${response.results[0].name.first} ${response.results[0].name.last}`)
        })
        .catch(err => {
          console.log(err);
        });
  }

  postData(){
    var url ="https://dummy-api-employee.herokuapp.com/api/course";
    fetch(url,{
      "method":"POST",
      "headers": {
       
        "content-type": "application/json",
        "accept": "application/json"
      },
      "body": JSON.stringify({
        "course":{"course_id":"FlutterBasics_16087123279169081",
                "course_title":"Flutter Basics",
                "created_at":"2020-12-24T15:24:04.371Z",
                "course_price":499}
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
          </div>
      </header> 
    </div>
  );
}}

export default App;
