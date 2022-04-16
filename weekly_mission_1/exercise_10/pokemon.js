export default class Pokemon{
    constructor(name){
      this.name = name
      this.msg = 'my name is Pikachu'
    }
  
    sayHello(){
      console.log(`My pokemon ${this.name} say hello!!!`)
    }
  
    sayMessage(msg){
      console.log(`My pokemon ${this.name} say: ${this.msg}`)
    }
  }