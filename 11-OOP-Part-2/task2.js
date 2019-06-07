function CoffeeMachine(power) {
    var waterAmount = 0;
    this.power = power;
}


CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;

CoffeeMachine.prototype.run = function() {
    setTimeout(function() {
        console.log('Coffee is ready!');
    }, this.getTimeToBoil());
    console.log(this.getTimeToBoil());
};
  	
CoffeeMachine.prototype.setWaterAmount = function(amount) {
    waterAmount = amount;
};
	
CoffeeMachine.prototype.getTimeToBoil = function() {
    return waterAmount * this.WATER_HEAT_CAPACITY * 80 / this.power;
};

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();
