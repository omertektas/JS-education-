//console.log(window);
//console.log(this); //global scope

/*
const emp1 = { // object Literal
    name:"Mustafa",
    age:25,
    print: function(){console.log("Hello World")}
};
console.log(emp1);
console.log(emp1.name);
console.log(emp1.age);
emp1.print();

emp1.salary = 4000;

console.log(emp1); //salary eklendi

*/

// eğer bu objelerden birden fazla gerekiyorsa 

function Employee(name,age,salary){ // Constructor
    this.name = name;
    this.age = age;
    this.salary = salary;

    this.showInfos = function(){
        console.log(this.name,this.age,this.salary);
    }
}

const emp1 = new Employee("Ömer",23,5000);
const emp2 = new Employee("İkra",20,4000);

emp1.showInfos();
emp2.showInfos();

