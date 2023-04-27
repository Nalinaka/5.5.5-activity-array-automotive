//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

   class Car extends VehicleModule.Vehicle {

        constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
            this.maximumPassengers = 5;
            this.passengers = 0;
            this.numberOfWheels = 4;
            this.maximumSpeed = 160;
            this.fuel = 10;
            this.scheduleService = false;
        } 

        start() {
            if (this.fuel > 0) {
                console.log("engine started!!!");
                return this.started = true;
            } else {
                console.log("engine cannot start");
                return this.started = false;
            }
        }
        

        scheduleService() {
            if (this.mileage > 30000) {
                this.scheduleService = true;
                return this.scheduleService;
                
            } else {
                return this.scheduleService = false;
                
            }
}}

            //Create at least two new instances of the Car class and test them here:
            //Below created the objects, this is what is passed around.
            //(Instances means examples so Hyundai and Toyota, these are specific examples
            // of the class)

            let Hyundai = new Car ("Tuscon", "SUV", "2012", "white", "100000");
            console.log(Hyundai.make)
            console.log(Hyundai.model)
            console.log(Hyundai.year)
            console.log(Hyundai.color)
            console.log(Hyundai.mileage)
            console.log(Hyundai.start())
     //       console.log(Hyundai.scheduleService())

            let Toyota = new Car ("Camry", "Sedan", "2020", "red", "25000");
            console.log(Toyota.make)
            console.log(Toyota.model)
            console.log(Toyota.year)
            console.log(Toyota.color)
            console.log(Toyota.mileage)
            console.log(Toyota.start())
       //     console.log(Toyota.scheduleService())


