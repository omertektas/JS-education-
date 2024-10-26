//ES5

/*
function Employee(name,age,salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
}

Employee.prototype.showInfos = function(){
    console.log("İsim: "+this.name + "Yaş :"+this.age + "Maaş: "+this.salary);

}

const emp = new Employee("Ömer",23,5000);
console.log(emp);
*/

//yukarıdaki yapının ES6 hali
class Employee{
    constructor(name,age,salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    showInfos(){
        console.log("İsim: "+this.name + "Yaş :"+this.age + "Maaş: "+this.salary);
    }
}

const emp = new Employee("Ömer",23,5000);
console.log(emp);
emp.showInfos();


//Statik nedir

class Math{
     static cube(x){
        console.log(x*x*x);
    }
}

Math.cube(3); // statik yapmasaydım new ile nesne oluşturmam gerekiyordu