// javascript exercises


function runGameOne() {
	// simple game where we can guess a word
	// and the program will tell us if that word
	// is the answer

	// concepts: PROMPT, variables, LET, assignment, Strings,
	// IF, ELSE IF, conditional, equality/inequality 
	// operator, console.log

	// can talk about HTML, JavaScript
	// modify the program to be a number guessing game
	let answer = 'TAUPE';

	let userGuess = prompt('enter a 5-letter word');
	if (userGuess !== answer) {
		console.log('try again');
	} else if (userGuess === answer) {
		console.log('you win!');
		return;
	}

	userGuess = prompt('enter a 5-letter word');
	if (userGuess !== answer) {
		console.log('you lose!');
	} else if (userGuess === answer) {
		console.log('you win!');
	}
}


function runGameTwo() {
	// this game builds on the previous version -- now
	// we can handle multiple guesses

	let answer = 'CHARM';
	let userGuess = prompt('enter a 5-letter word');
	let availableGuesses = 5;
	while (availableGuesses !== 0) {
		if (userGuess === answer) {
			console.log('you win!');
			return;
		} else {
			availableGuesses = availableGuesses - 1;
			userGuess = prompt('enter a 5-letter word');
		}
	}

	// concepts: Boolean values, Number values, 
	// boolean algebra, WHILE, simple (dangerous) looping,
	// REassignment, addition

	let correctAnswer = false;

	let guesses = 0;
	let maxGuesses = 5;

	while (guesses !== maxGuesses && !correctAnswer) {
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
	} else {
		console.log('you lose');
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
		guessesAvailable--;
		if (userGuess !== answer) {
			console.log('incorrect guess ('+userGuess+')');
			userGuess = prompt('enter a 5-letter word');
		} else {
			console.log('you win! guessed in ' + (6 - guessesAvailable) + ' guesses.');
			break;
		}
	}

	if (!guessesAvailable) {
		console.log('you lose!');
	}
}

runGameThree();