// javascript exercises


function runGameOne() {
	// simple game where we can guess a word
	// and the program will tell us if that word
	// is the answer

	// concepts: PROMPT, variables, LET, assignment, Strings,
	// IF, ELSE IF, conditional, equality/inequality 
	// operator, console.log
	let userGuess = prompt('enter a 5-letter word');

	let answer = 'TAUPE';

	if (userGuess !== answer) {
		console.log('wrong answer dum dum');
	} else if (userGuess === answer) {
		console.log('you win!');
	}
}


function runGameTwo() {
	// this game builds on the previous version -- now
	// we can handle multiple guesses

	// concepts: Boolean values, Number values, 
	// boolean algebra, WHILE, simple (dangerous) looping,
	// REassignment, addition
	let userGuess = prompt('enter a 5-letter word');

	let answer = 'CHARM';

	let correctAnswer = false;

	let guesses = 0;
	let maxGuesses = 5;

	while (guesses !== maxGuesses || !correctAnswer) {
		if (userGuess !== answer) {
			console.log('incorrect guess');
			guesses = guesses + 1; // guesses += 1; guesses++;
			userGuess = prompt('enter a 5-letter word');
		} else {
			correctAnswer = true;
		}
	}

	if (correctAnswer) {
		console.log('you win!');
	}
}

function runGameThree() {
	// also building on the previous version

	// concepts: truthy/falsey, String concatenation,
	// decrement, BREAK
	let userGuess = prompt('enter a 5-letter word');

	let answer = 'STORY';

	let guessesAvailable = 5;
	while (guessesAvailable) {
		if (userGuess !== answer) {
			console.log('incorrect guess ('+userGuess+')');
			guessesAvailable--;
			userGuess = prompt('enter a 5-letter word');
		} else {
			console.log('you win! guessed in' + (5 - guessesAvailable));
			break;
		}
	}
}
