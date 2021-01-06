const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let triceratops;
  let velociraptor;
  let spinosaurus;
  beforeEach(function () {
    triceratops = new Dinosaur('Triceratops', 'herbivorous', 62);
    velociraptor = new Dinosaur('Velociraptor', 'scavenger', 73);
    spinosaurus = new Dinosaur('Spinosaurus', 'carnivore', 57);
    park = new Park('Mesozoic', 12);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Mesozoic');
  });

  it('should have a ticket price', function(){
    const actual = park.price;
    assert.strictEqual(actual, 12);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurCollection;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(triceratops);
    const expected = [triceratops];
    assert.deepStrictEqual(park.dinosaurCollection, expected);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(triceratops);
    park.removeDinosaur(triceratops);
    const expected = [];
    assert.deepStrictEqual(park.dinosaurCollection, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(triceratops);
    park.addDinosaur(velociraptor);
    park.addDinosaur(spinosaurus);
    const expected = 73;
    assert.strictEqual(park.mostAttractiveDinosaur(), expected);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(triceratops);
    park.addDinosaur(velociraptor);
    // park.addDinosaur(spinosaurus);
    const expected = (velociraptor);
    assert.strictEqual(park.findDinosaur(velociraptor), expected)
  });

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
