# React-Udemy

initialize project:

``` 
cd react-tutorial
npm star
```

## important funcions

```
React.createElemen('div',{className: 'App', 'hola'});

state = {
    persons:[
    {name: "cesar", age: 29},
    {name: "ana", age:90},
    {name: "carlos", age:20}
]

}

{this.state.person[0].name}
{this.state.person [0].age}

para cambiar de estado usar un handler ( funcion). 
```javascriipt
switchNameHandler () => {

    this.setState ({
    person: [
    
    {name: 'aa', age: 34}
    
    ] 
    } 
    
    ) 
}
```
x




importante usar el this. cuando se habla de una propiedad dentro de la clase App

<button onClick> ... </button>

importante: stateless y statefull. Los estados solo deberian modificar el DOM
en ciertos componentes (ie .App.js) y no en las otras clases.

para pasar un argumento a state = () => {} , usar .bind (this,var)

