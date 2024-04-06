class Person{
    firstName;
    lastName;
    #country;
    #region;

    constructor(firstName,lastName,country,region){
        this.firstName = firstName;
        this.lastName = lastName;
        this.#country = country;
        this.#region = region;
    }
    from(){
        console.log(`${this.#country} ${this.#region}`);
    }
}

const person1 = new Person("Samandar", "Inomov", "Uzbekistan", "Tashkent");

person1.from()

console.log(person1.region);






