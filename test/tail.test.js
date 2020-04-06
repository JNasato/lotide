const assertEqual = require('../assertEqual');
const tail = require('../tail');

//TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3); //pass

const one = ["WOW WOW"];
tail(one);
assertEqual(one.length, 1); //pass

const empty = [];
tail(empty);
assertEqual(empty.length, 0); //pass