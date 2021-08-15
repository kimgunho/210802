// 데이터를 구조화 할 때 오브젝트 사용

const box = {
  width: 200,
  height: 100,
  color: '#ddd',
}

const person = {
  name: 'kim',
  age: 24,
  'a-b': 'ss',
}

const key = 'name'

//get value
person.name
person['name']
person['a-b']
person[key]

//값을 추가하는 방법 중요!!
const p = {}

p.name = 'kim' //선호하지않음

//...
const person1 = {
  name: 'zombi',
  age: 30,
  keyword: 'zombie',
}
const updatePerson1 = {
  ...person1,
  add: 'gunpo',
}

updatePerson1.job = 'designer..'

//update
const person2 = {
  name: 'zombi',
  age: 30,
  keyword: 'zombie',
}

const updatePerson2 = {
  ...person2,
  age: 31,
}
