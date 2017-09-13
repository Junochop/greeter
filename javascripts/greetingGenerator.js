"use strict";

const french = require('./french'); //no need to .js
const italian = require('./italian');
const spanish = require('./spanish');
const english = require('./english');
const greetingGenerator = {

	french, italian, spanish, english


};



module.exports = greetingGenerator;