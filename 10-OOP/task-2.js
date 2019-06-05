function CoffeeMachine(power, capacity) {
	//...
	this.setWaterAmount = function(amount) {
		if (amount < 0) {
			throw new Error("Value has to be positive.");
		}
		if (amount > capacity) {
			throw new Error("You can't put more water, than " + capacity);
		}
		waterAmount = amount;
	};
    
	this.getWaterAmount = function() {
		return waterAmount;
    };
    
    this.getPower = function() {
        return power;
    }
}

const userCoffeeMachine = new CoffeeMachine(16, 10);

console.log(userCoffeeMachine.getPower());