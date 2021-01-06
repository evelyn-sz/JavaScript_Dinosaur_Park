const math = require('mathjs');
const Dinosaur = require('./dinosaur.js');

const Park = function (name, price){
    this.name = name;
    this.price = price;
    this.dinosaurCollection = [];
}

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurCollection.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur){
    const index = this.dinosaurCollection.indexOf(dinosaur);
    this.dinosaurCollection.splice(index);
}

Park.prototype.mostAttractiveDinosaur = function(){
    let attractiveArray = [];
    for (let dinosaur of this.dinosaurCollection){
        attractiveArray.push(dinosaur.guestsAttractedPerDay);
    }
    const max = math.max(attractiveArray);
    const index = attractiveArray.indexOf(max);
    return attractiveArray[index];
}
module.exports = Park;