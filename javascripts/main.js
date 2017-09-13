"use strict";

const GreetingGenerator = require('./greetingGenerator');


document.getElementById("buttons").addEventListener('click', (event) =>{

	let languageSelected; //selected id
	console.log(languageSelected);

	if (event.target.id === "buttons"){
		//don't set language selected

		languageSelected = 'english';

	} else {
		languageSelected = event.target.id;
	}
    
    document.getElementById('output').innerHTML = GreetingGenerator[languageSelected]();



});

