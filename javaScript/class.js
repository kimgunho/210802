const p = { = 
  name: 'kim',
  age: 40,
  getName : function(){

  }
}

const p2 = {
  name: 'lee',
  age: 22,
}

const p3 = {
  name: 'zuu',
  age: 55,
}


class Person {
    // new를 실행했을때 제일먼저 단 한번 실행되는 함수
    constructor(name, age){
        // 초기화 => 값, 이벤트, ...
        // ...rest
        this.name = name
        this.age = age
        this.getName = function (){

        } 
    }
}

const p4 = new Person('cu', 42)
const p5 = new Person('su', 62)
const p6 = new Person('tu', 22)
