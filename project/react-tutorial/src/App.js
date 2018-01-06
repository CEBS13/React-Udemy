import React, { Component } from 'react';
import './App.css';
import Radium ,{StyleRoot} from 'radium';
import Person from './Person/Person';

class App extends Component {
    state = {
      persons: [
        {id:'a1', name:'Cesar', age: 20},
        {id:'a2', name:'Juana', age: 21},
        {id:'a3', name:'carlos', age:90}
      ],
      otherState: 'some other state',
      showPersons: false
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


  nameChangedHandler = (event, id ) => {
    //console.log("Funciona!");
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
     // const person = Object.assing({}, this.state.persons[personIndex])
    this.setState( {persons :persons});
}

showPersonHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});

}

deletePersonHandler = (personIndex) =>{
const persons = [...this.state.persons];
persons.splice(personIndex,1);
this.setState({persons: persons})
}

  render() {



    let persons = null;
    let btnClass ='';

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            click={() => this.deletePersonHandler(index)}
              name = {person.name}
              age = {person.age}
              key = {person.id}
              changed = {(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );

btnClass = classes.Red;

    }

    const classes = [];

    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }
    return (
      <StyleRoot>
      <div className="App">
        <h1> Hi i am a react app </h1>
        <p className ={classes.join(' ')} > this is relly working </p>
        <button className={class} onClick = { this.showPersonHandler}> Switch name </button>
        {persons}
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
