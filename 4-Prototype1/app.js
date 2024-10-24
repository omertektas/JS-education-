/*const obj = new Object(); //Object Literal
obj.name = "Ömer";
obj.age = 23;

console.log(obj);*/

// Prototyp bir zincir şeklindedir en baştaki Object
function Employee(name,age){ //constructor
    this.name = name;
    this.age = age;
    
}
//Eğer ortak kullanılacak bir fonksiyon varsa protypine erişip bu şekilde
//yapabiliriz.hafızada daha az yer kaplar
Employee.prototype.showInfos = function(){
    console.log("İsim: " + this.name + " Yaş: " +this.age);
}

const emp1 = new Employee("Mustafa",25);
const emp2 = new Employee("Oğuz",25);
console.log(emp1);
console.log(emp2);

emp2.showInfos();


