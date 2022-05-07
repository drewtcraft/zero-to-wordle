# lesson one notes

### Core concepts
- JavaScript is a versatile language that can run in the browser
- HTML is the language of the web, and our JavaScript code can live inside of it

### JavaScript Concepts
- comments! we can write stuff (notes, hints, TODOs) in our code that we don't want to execute by putting a `//` at the beginning of the line:
```javascript
// this is a comment!
// here's another
```
- variables -- variables are aliases for _other things_ -- last week our variables stored _data_, like this:
```javascript
let answer = 'TAUPE';
```
- the `let` keyword defines a variable, and the `=` operator lets us assign things to it. Variables declared with `let` can be _reassigned_.
```javascript
let variableWithNoData; // here we create the variable

// and now we assign it a value
variableWithNoData = 'well, now it has some data';

// and now we REassign it a value
variableWithNoData = 'this was a bad name for a variable';
```
- `prompt` is a special browser function that _prompts_ a user for data. When we pass it a string, it will display it to the user, along with a text input. Whatever the user inputs gets returned:
```javascript
// displays prompt with "Input your guess, user!" displayed.
let userGuess = prompt('Input your guess, user!');
// userGuess now contains whatever the user put into the prompt
```
- `if` is a keyword that we can use to evaluate if something is true.
```javascript
if (true) {
    // this code will always run
}
```
- we can chain multiple if blocks with `else` and `else if`:
```javascript
if (false) {
    // ...
} else if (true) {
    // ...
} else {
    // ...
}
```
- the `===` operator (a.k.a. _equality_ operator) compares two values and returns true if they are the same:
```javascript
2 === 2 // true
'yes' === 'yes' // true
1 === 2 // false
'yes' === 'no' // false
```
- conversely, the `!==` inequality operator evaluates whether two values are different:
```javascript
2 !== 1 // true
```
- if we put it all together, it actually sort of reads like english:
```javascript
if (userGuess === answer) {
    alert('you win!');
} else {
    alert('you suckkkkk');
}
```

### Copy of last week's code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Wordle</title>
</head>
<body>
<script type="text/javascript">
    function runGameOne() {
        let answer = 'TAUPE';

        let userGuess = prompt('enter a 5-letter word');
        if (userGuess !== answer) {
            alert('try again');
        } else if (userGuess === answer) {
            alert('you win!');
            return;
        }

        userGuess = prompt('enter a 5-letter word');
        if (userGuess !== answer) {
            alert('you lose!');
        } else if (userGuess === answer) {
            alert('you win!');
        }
    }
    runGameOne();

</script>
</body>
</html>
```
