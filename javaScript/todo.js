class Persons {
  constructor(name, age, izl, memo, id) {
    this.name = name
    this.age = age
    this.izl = izl
    this.memo = memo
    this.id = id
    this.Users = []
  }
  //izl 쉽게

  IzlCheck() {
    const IzlName = document.getElementsByName('iZL')
    for (let i = 0; i < IzlName.length; i++) {
      // IzlName[i].checked === true ? IzlName[i].value ???
      if (IzlName[i].checked === true) {
        return IzlName[i].value
      }
    }
  }

  valueReset() {
    document.querySelector('.wrName').value = ''
    document.querySelector('.wrAge').value = ''
    document.getElementsByName('iZL')[0].checked = false
    document.getElementsByName('iZL')[1].checked = false
    document.querySelector('.wrMemo').value = ''
    // this.id를 리셋하지않았음
  }

  readData() {
    this.name = document.querySelector('.wrName').value
    this.age = document.querySelector('.wrAge').value
    this.izl = this.IzlCheck()
    this.memo = document.querySelector('.wrMemo').value
    this.id = this.Users.length + 1
  }

  createLi(num, name, age, izl, memo) {
    const Ul = document.querySelector('.playerList')
    const Li = document.createElement('li')
    Li.innerHTML = `
    <ul>
        <li class='del'><a href="javascript:void(0)" onclick="Action.removeLi(${num});">del</a></li>
        <li class='num'>${num}</li>                    
        <li class='name'>${name}</li>                    
        <li class='age'>${age}</li>                    
        <li class='isZombieLike'>${izl}</li>                    
        <li class='tx'>${memo}</li>                    
    </ul>    
    `
    Li.classList.add(`list${num}`)
    Ul.appendChild(Li)
  }

  removeLi(num) {
    console.log('num', num)
    const UlChild = document.querySelector('.playerList')
    const removeLi = UlChild.querySelector(`.list${num}`)
    UlChild.removeChild(removeLi)
    this.removeUser(num)
  }

  addUser() {
    const User = {
      name: this.name,
      age: this.age,
      izl: this.izl,
      memo: this.memo,
      id: this.id,
    }
    this.Users = [...this.Users, User]
    //console.log(this.Users)
  }

  removeUser(id) {
    this.Users = this.Users.filter((user) => user.id !== id)
    console.log(this.Users)
    // console.log(id)
  }

  loadZombieLike() {
    const izlVal = document.querySelectorAll('.isZombieLike')
    for (const idz of izlVal) {
      idz.innerText === 'True'
        ? idz.classList.add('like')
        : idz.classList.add('dislike')
    }
  }

  checkValue() {
    this.readData()
    if (this.name !== '' && this.age !== '' && this.izl !== undefined) {
      this.addUser()
      this.createLi(this.id, this.name, this.age, this.izl, this.memo)
      this.valueReset()
    } else {
      alert('빈 공간이 있습니다.')
    }
  }

  loadAction() {
    this.checkValue()
  }
}

const Action = new Persons()
