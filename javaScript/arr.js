const arr = [1, 'string', {}]

// 값을 가져오는 방법
const persons = [
  { name: 'a', msg: 'hello', isLikeZombie: true },
  { name: 'b', msg: 'world', isLikeZombie: false },
  { name: 'd', msg: 'bab', isLikeZombie: true },
]
const Newpersons = [...persons, { name: 'c', msg: 'like zombie.' }]

// del fitter

const removePersons = Newpersons.filter((person) => {
  return person.name !== 'c'
})

// console.log(removePersons)
// filter 기존배열에서 조건에 맞는 값을 골라낸다.

// update = map

const updatePersons = Newpersons.map((person) => {
  if (person.name === 'c') {
    return { ...person, msg: 'dddd' }
  }
  return person
})

// console.log(updatePersons)

const zombieLikePersons = persons.filter((person) => {
  if (person.isLikeZombie === true) {
    return person
  }
})

console.log(zombieLikePersons)
