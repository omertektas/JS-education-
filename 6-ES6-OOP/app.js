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

    sqrt(x){
        console.log(x*x)
    }
}

const obj = new Math;
Math.cube(3); // statik yapmasaydım new ile obje oluşturmam gerekiyordu

//obje oluşturarak statik metodlara erişemeyiz

//ES5deki kalıtımı object.create prototypelarla yapıyoruz 
// Inheritance(kalıtım) 

class Person{  //SuperClass
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showInfos(){
        console.log("İsim:"+this.name+" Yaş:"+this.age);
    }
}

class Employee2 extends Person{ //SubClass
    constructor(name,age,salary){
        super(name,age);
        this.salary = salary;
    }
}

const emp2 = new Employee2("Sude",23,5000);
console.log(emp2); 
emp2.showInfos();