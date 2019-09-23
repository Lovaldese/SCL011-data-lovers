global.window = global;
global.assert = require('chai').assert;
// require('../src/data/rickandmorty.js');
require('../src/data');
require('./data.spec.js');

describe('species', () => {

   const show = [
 
  { 
    "name": "Rick Sanchez",
    "species": "Human",

   },

   {
    "name": "Aqua Morty",
    "species": "Humanoid",
  },

   { 
    "name": "Alien Morty",
    "species": "Alien",
   },

   ];
  it('debería ser una función', () => {
    assert.equal(typeof window.filter.species, 'function');
  });

  it('debería retornar "Rick Sanchez" al filtrar por species "Human"', () => {
    assert.deepEqual(window.filter.species(show,"Human"), [{"name": "Rick Sanchez",
    "species": "Human",}]);

  });
})
