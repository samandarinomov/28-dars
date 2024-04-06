class Calculator {
   a;
   b;
   constructor(a,b){
    this.a = a
    this.b = b
   }
   
   add(){
      return this.a + this.b;
   }
  
   substract(){
      return this.a - this.b ;
   }
   
   multiply(){
      return this.a * this.b;
   }
}

const result1 =  new Calculator(6,5)

console.log(result1); 

console.log(result1.add());

console.log(result1.substract());

console.log(result1.multiply());  