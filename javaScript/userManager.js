/**
 * 목적: 회원관리 시스템
 *
 * 필요기능
 * 1. 회원가입
 * 2. 회원 탈퇴
 * 3. 좀비를 좋아하는 회원만 골라내는 기능
 * 4. 회원 목록 출력
 */

/**
 * class 회원
 * - name
 * - isLikeZombie
 *
 * class 회원관리 시스템
 * - Person[]
 */

class User {
  constructor(id, name, isLikeZombie) {
    this.id = id
    this.name = name
    this.isLikeZombie = isLikeZombie
  }
}

class UserManager {
  constructor() {
    this.users = []
  }
  addUser(person) {
    this.users = [...this.users, person]
  }
  removeUser(id) {
    this.users = this.users.filter((person) => person.id !== id)
  }
  // id 값을 받아서
  // (토글링) false => true / true => false
  // 좀비를 좋아하는 회원이었다면 좀비를 싫어하는것으로 체크
  // 좀비를 싫어헀다면 좋아하는것으로 체크
  updateLikeZomibe(id) {
    this.users = this.users.map((person) => {
      // 업데이트 대상이라면
      if (person.id === id) {
        return { ...person, isLikeZombie: !person.isLikeZombie }
      }
      return person
    })
  }
  // 현재 유저 목록 출력
  // ex. 나좀비 - 좀비를 좋아함 ( isLikeZombie 가 true 일 때)
  // ex. 나좀비 - 좀비를 싫어함 ( isLikeZombie 가 false 일 때)
  printUsers() {
    for (let i = 0; i < this.users.length; i++) {
      this.users[i].isLikeZombie === true
        ? console.log(`${this.users[i].name}님은 좀비를 좋아합니다.`)
        : console.log(`${this.users[i].name}님은 좀비를 싫어합니다.`)
    }
  }
  // this.users.filter((user) => {
  //   user.isLikeZombie === true
  //     ? console.log(`${user.name}은 좀비를 좋아합니다.`)
  //     : console.log(`${user.name}은 좀비를 싫어합니다.`)
  // })
}

const manager = new UserManager()

manager.addUser(new User(1, '홍길자', true))
manager.addUser(new User(2, '홍길동', true))
manager.addUser(new User(3, '겁쟁이', false))
manager.printUsers()
// manager.removeUser(1)
// manager.updateLikeZomibe(1)
// manager.printUsers()
