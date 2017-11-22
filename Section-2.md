# Section 2 Next gen JS

## Let and cons

let: is the new var()

const is used for variables that does not changes.

### Example

```javascript
    var Myname = "cesar";
   console.log(Myname);
```
=> "cesar"

```javascript
    let Myname = "cesar";
    console.log(MyName)
```
=> "cesar"

## Arrow Functions

normal js funcion

```javascript
    function printMyName(name){
    console.log(name);
}
```
Arrow function

```javascript
    const printMyName =(name) => {
    console.log(name);
}
```

### Example - Arrow Function

```javascript
const printMyName = () => {
    console.log('cesar')    
}
printMyName();
'''
=> 'cesar'

```javascript
const printMyName(name. age) => {
    console.log(name, age);
}

printMyName(cesar,21);

```
=> 'cesar'
=> 21

```javascript

const multiply= (number) => {
    return 2 * number;
}

console.log(multiply(2));
```
=> 4

```javascript
const multiply = number => number * 2;

console.log(multiply(2));
```
## Classes

```javascript
class Person{
    name = 'Cesar';  
    x0
    printMyName() => {
    console.log(this.name);
    }
    
}

const person = new Person();

person.printMyName();
```
=> "cesar"
