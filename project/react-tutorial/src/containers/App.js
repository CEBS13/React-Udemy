import React, {PureComponent} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends PureComponent {

  constructor(props){
    super(props);
    console.log('[App.js] Inside Constructor', props);

    this.state = {
        persons: [
          {id:'a1', name:'Cesar', age: 20},
          {id:'a2', name:'Juana', age: 21},
          {id:'a3', name:'carlos', age:90}
        ],
        otherState: 'some other state',
        showPersons: false
      }
  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[App.js] inside componentDidMount()');
  }

/** 
  shouldComponentUpdate ( nextProps, nextState ) {
    console.log( '[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState );
    return nextState.persons !== this.state.persons ||
      nextState.showPersons !== this.state.showPersons;
  }
*/

  componentWillUpdate ( nextProps, nextState ) {
    console.log( '[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState );
  }

  componentDidUpdate () {
    console.log( '[UPDATE App.js] Inside componentDidUpdate' );
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
    console.log('[App.js] inside render()');
    let persons = null;
    if (this.state.showPersons){
      persons =
          <Persons
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler} />
    }


    return (
      <div className={classes.App}>
      <Cockpit
        showPersons = {this.state.showPersons}
        persons = {this.state.persons}
        clicked = {this.showPersonHandler} />
      {persons}

      </div>
    );
  }
}

export default App;
