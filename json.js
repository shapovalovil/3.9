class User {

    constructor(name) {
      this.name = name;
    }
  
    sayHi() {
      alert(this.name);
    }
  
  }
  let My = {
name : 'Ivan',
Age : 34,
date : '12.12.1212',
     rassa : {
         w: 3,
         e: 4,
     }
  }
  let test = new User("ivannn");
  test.sayHi();
  console.log(JSON.parse(JSON.stringify(My)));