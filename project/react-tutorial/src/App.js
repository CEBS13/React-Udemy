import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
      persons: [
        {name:'Cesar', age: 20},
        {name:'Juana', age: 21},
        {name:'carlos', age:90}
      ]
    }

    switchNameHandler = (newName) => {
      //console.log("Funciona!");
      this.setState( {
        persons: [
          {name:newName, age: 20},
          {name:'Juana', age: 21},
          {name:'carlos', age:90}
        ]
      }

    )
  }


  nameChangedHandler = (event) => {
    //console.log("Funciona!");
    this.setState( {
      persons: [
        {name:'Cesar', age: 20},
        {name:event.target.value, age: 21},
        {name:'carlos', age:90}
      ]
    })
}

  render() {

    const style = {
      backgroundColor: 'White',
      font: 'Inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer' };



    return (

      <div className="App">
        <h1> Hi i am a react app </h1>
        <button style={style} onClick = { () => this.switchNameHandler('Cesar!!')}> Switch name </button>

        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>

        <Person
        click = {this.switchNameHandler.bind(this,'ceeessaarr')}
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        changed= {this.nameChangedHandler}/>

        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> Hobbies:basquet </Person>
      </div>
    );
  }
}

export default App;
