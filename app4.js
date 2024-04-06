class Person{
    name;
    age;
    gender;
    from;

    constructor(name, age, gender, from){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.from = from;
    }
    sayMeFrom(){
        console.log(this.from);
    }
}

class Person1 extends Person{
    car;

    constructor(name, age, gender, from, car){
        super(name, age, gender, from)
        this.car = car;
    }
}

class Person2 extends Person{
    proffesion;

    constructor(name, age, gender, from, proffesion) {
        super(name, age, gender, from)
        this.proffesion = proffesion
    }
}

class Person3 extends Person{
    hotel;
    constructor(name, age, gender, from, hotel) {
        super(name, age, gender, from)
        this.hotel = hotel
    }
}

const people1 = new Person1("Samandar", 20, "Male", "Uzbekistan", false);
const people2 = new Person2("Barno", 25, "Female", "Uzbekistan", "Teacher");
const people3 = new Person3("Cristiano", 39, "Male", "Portugal", true)

console.log(people1);

console.log(people2);

console.log(people3);

people1.sayMeFrom()

people2.sayMeFrom()

people3.sayMeFrom()

// otani umumiy Person deb class yaratdim uning vorislari esa Person1, Person2, Person3