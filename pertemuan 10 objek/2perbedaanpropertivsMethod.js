var car = {
    //properti
    type: "Suzuki",
    model: "Baleno",
    year: "1997",
    color: "green",

    //method
    start:function(){
        console.log("ini method start");
    },

    drive: function(){
        console.log("ini method drive");
        
    },

    brake: function(){
        console.log("ini method brake");
    },

    stop: function(){
        console.log("ini method stop");
    }
}; 

console.log(car.type);
console.log(car.color);
car.start();
car.drive();