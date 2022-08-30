// Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parent protoype.

let object1 = {
    name: "Ankitha",
    city: "Mangalore",
    course: "Full Stack Developer",
    courseDuration : "4 Months",
    showDetails: function(){
        console.log(`${this.name} from ${this.city} is currently pursuing the ${this.course} which is of a duration of ${this.courseDuration}`);
    }
}

console.log(object1);
object1.showDetails();

let object2 = {
    name: "Gautam",
}

let object3 = {
    name: "Priyanka",
}

//method 1
object2.__proto__ = object1;
object2.showDetails();

object3.__proto__ = object1;
object3.showDetails();

object1.showDetails.call(object2);
object1.showDetails.call(object3);

//method 2

let object4 = Object.create(object1);
object4.showDetails();

//Question 2. Write code to explain prototype chaining

function Laptop(brand, model, RAM){
    this.brand = brand;
    this.model = model;
    this.RAM = RAM;
}

const myLaptop = new Laptop("HP", "Pavilion", "16GB");
console.log(myLaptop.hasOwnProperty("brand"));

//Question 3. Add a method to calcualte sum of all elements in Array prototype, use that method to caluclate sum of multiple arrays.

const Array1 = [15, 16, 17, 18, 19];
const Array2 = [100, 200, 300, 400, 500];

Array.prototype.sum = function (){
    let total = 0;
    for(let i=0; i < this.length; i++){
        total = total + this[i];
    }
    console.log(total);
}

Array1.sum();
Array2.sum();

//4. Write a Javascript function to retrieve all the names of objects own and inherited properties

let car1 = {
    company : "Toyota",
    model : "Land cruiser",
    year : "2017",
    engine : "V8",
    print : function(){
        console.log(`The ${this.model} is manufactured by ${this.company} in ${this.year} has a ${this.engine} engine`);
    },
    initialize(company, model, year, engine ){
        this.company = company;
        this.model = model;
        this.year = year;
        this.engine = engine
    }
};

const car2 = Object.create(car1);
console.log(car2);
car2.initialize("Jaguar Cars", "Jaguar XK", "2015", "AJ V8");
car2.print();

const car3 = Object.create(car1);
console.log(car3);;
car3.initialize("Honda", "Civic", "2011", "158hp 4 cylinder");
car3.print();
// car2.print("Honda", "Civic", "2011", "158hp 4 cylinder")
// console.log(car2.print("Honda", "Civic", "2011", "158hp 4 cylinder"));

for(const key in car2){
    console.log(key);
}

const sumTotal = (N) => {
    let sum = 0;
    for(let i=0;i<=N;i++){
      sum = sum + i;
    }
    console.log(sum);
  };
  sumTotal(5);