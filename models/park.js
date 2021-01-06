const Park = function (name, price){
    this.name = name;
    this.price = price;
    this.dinosaurCollection = [];
}

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurCollection.push(dinosaur);
}

module.exports = Park;