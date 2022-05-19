## Lesson 2

### Concepts
- looping with `while` loops
  - the while keyword can be used to create loops
  - its syntax is similar to if-statements:
    - the `while` statement is given a condition to evaluate
    - and a block to execute if that condition is true
```javascript
while (condition) {
    code to execute
}
```
- infinite loops
  - if the condition we give to the while loop is always true, we create an inifite loop
  - infinite loops freeze our programs, and caused Andrew's browser to crash last lesson
```javascript
let x = true;
while (x) {
    // x is always true, so we are stuck in this loop
}
```

- avoiding infinite loops
  - the key to avoiding infinite loops is to make sure your while loop's condition is changed in the while loop's block
```javascript
// this will alert 0, then 1, then 2, up to 9
// this is also a good example of counting with a while loop!
let y = 0;
while (y < 10) { 
    alert(y);
    y = y + 1;
}
```

- dynamic strings
  - we can attach variables and other pieces of data to strings using the `+` operator
```javascript
let helloString = 'hello';
let message = helloString + ' Andrewwwww';
alert(message); // alerts "hello Andrewwww"
```

- string length
  - we can get the number of characters in a string by looking at it's `length` property
```javascript
let myString = 'ABC';
alert(myString.length) // alerts 3
```

- what are properties?
  - like `String.length`, variables and other pieces of data can have _properties_
  - examples of this down the road will include things like `Person.age`, `Person.height`, etc.
  - for now, focus on the String length property

- string casing
  - we can take a string and make it either all uppercase or all lowercase using some related _methods_
```javascript
let thisString = 'Lord Monkey II';
alert(thisString.toLowerCase()); // alerts "lord monkey ii"
alert(thisString.toUpperCase()); // alerts "LORD MONKEY II"
```

- what are methods?
  - similar to properties, variables and other pieces of data can have _methods_
  - they are used in a similar way to properties, in that we use a `.` to access them, but with one important difference:
    - methods are _callable_, which means they will have `()` at the end
  - down the road, we might see something like `Person.getCurrentHealth()`, or `Person.conceiveChild()`
  - for now, focus on the `toUpperCase` and `toLowerCase` methods of strings

- string equality
  - we learned that casing is important with strings!
  - so `'TAUPE'` is not equal to `'taupe'`
```javascript
let taupe = 'taupe';
let uppercased = taupe.toUpperCase();
alert(taupe === uppercased); // this alerts false
alert(taupe !== uppercased); // this alerts true
alert(taupe === uppercased.toLowerCase()); // this alerts true as well
```

- bonus: boolean data type
  - we've talked about them a lot, but haven't seen them explicitly yet
  - a boolean is either true or false
  - they are especially useful with _conditionals_ -- the part that appears within the parenthesis with if- and while-loops
```javascript
let trueBool = true;
let falseBool = false;
```

### Copy of last week's code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<h1>Wordle Lesson 2</h1>
<p>It's still all gonna happen through prompts/alerts!</p>

<script type="text/javascript">
    
    
    
    let answer = 'TAUPE'; // 'taupe' !== 'TAUPE'
    let guesses = 1;
    let maxGuesses = 5;

    let guessLimit = guesses + maxGuesses; // or... 6!

    while (guesses < guessLimit) {
        let userGuess = prompt('enter a 5 letter word');

        // begin validation logic
        if (userGuess.length !== 5) {
            alert('guess is not 5 characters, please fix');
            continue; // skip the rest of the loop since we didn't get a valid guess
        }

        let lowerCasedGuess = userGuess.toUpperCase();
        if (lowerCasedGuess === answer) {
            alert('you won in ' + guesses + ' guesses!');
            break;
        } else {
            guesses = guesses + 1;

            if (guesses === guessLimit) {
                alert('you lost!');
            } else {
                alert('you beefed it! you have ' + (guessLimit - guesses) + ' guesses remaining');
            }
        }
    }
    
    
    
</script>
</body>
</html>
```

### How to run your code!
1. The only thing on your computer that knows how to understand JavaScript (at the moment) is your browser. Any code you run will need to live in an HTML document.
2. Create a new folder on your computer called "code" or something -- put it on the Desktop or somewhere easy to find.
3. Open the folder in VSCode.
4. In the drawer thing on the left-hand side, right click and select "Create new file"
5. Name the file `whatever-you-want-no-spaces-though.html` -- the important part here is the `.html` extension
6. Copy and paste this code into the file and put your code where the comments indicate
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<h1>HTML template</h1>
<p>Ooooweee somebody's tryna run some code</p>
<script type="text/javascript">
    // your JavaScript code starts here!

    
    
    
    
    // no JavaScript past here
</script>
</body>
</html>
```
7. When you're ready to run your code, open up your `code` folder, and you should be able to drag-and-drop or right-click-open-with the file into Chrome. If your code is not running, text me!.

### HOMEWORK
1. follow the instructions above to create a new HTML file on your local system -- call it something intelligible like `homework-1.html`
2. create a variable and give it any string for a value that is 9 characters or less
3. create another variable, call it `letterCount` or something, and set it to `0`
4. using a while loop, and your variables, and maybe even some other variables, loop for the length of the string and _create a new string which mirrors the number positions of each letter in the string_
   1. e.g. if your first variable's value was "blockhead"
        1. "blockhead" < input
        2. "012345678" < output
   2. e.g. if your first variable's value was "stupes"
      1. "stupes" < input
      2. "012345" < output
5. hints:
    1. you will not need to use any _methods_
    2. strings can be _empty_, `let emptyString = '';`