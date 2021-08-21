// 유저관리

// 1. 유저 추가
// 2. 유저 삭제
// 3. 좀비를 좋아하는 회원 필터링
// 4. 초기 이벤트

class Persons {
  constructor() {
    this.users = []

    this.bindEvent()
  }

  bindEvent() {
    // 삭제
    document.querySelector('.player_list').addEventListener('click', (e) => {
      if (e.target.className === 'del') {
        const removedUserId = e.target.dataset.id

        this.removeElement(e.target)
        this.removeUser(removedUserId)
      }
    })

    document.querySelector('.addBtn').addEventListener('click', (e) => {
      this.handleSubmit()
    })
  }

  IzlCheck() {
    const IzlName = document.getElementsByName('iZL')

    for (let i = 0; i < IzlName.length; i++) {
      // IzlName[i].checked === true ? IzlName[i].value ???
      if (IzlName[i].checked === true) {
        return IzlName[i].value
      }
    }
  }

  resetFormValues() {
    document.querySelector('.wrName').value = ''
    document.querySelector('.wrAge').value = ''
    document.getElementsByName('iZL')[0].checked = false
    document.getElementsByName('iZL')[1].checked = false
    document.querySelector('.wrMemo').value = ''
  }

  getFormValues() {
    const name = document.querySelector('.wrName').value
    const age = document.querySelector('.wrAge').value
    const izl = this.IzlCheck()
    const memo = document.querySelector('.wrMemo').value
    const id = Date.now()

    return {
      name,
      age,
      izl,
      memo,
      id,
    }
  }

  /**
   * 1. 이벤트 위임
   */
  createUserElement(user) {
    const { name, age, izl, id, memo } = user

    const Ul = document.querySelector('.playerList')

    const Fragment = document.createDocumentFragment()

    Fragment.innerHTML = `
        <ul>
            <li data-id="${id}" class='del'><a href="javascript:void(0)">del</a></li>
            <li class='num'>${id}</li>                    
            <li class='name'>${name}</li>                    
            <li class='age'>${age}</li>                    
            <li class='isZombieLike'>${izl}</li>                    
            <li class='tx'>${memo}</li>                    
        </ul>    
      `

    Ul.appendChild(Fragment)
  }

  removeElement(targetElement) {
    const UlChild = document.querySelector('.playerList')

    UlChild.removeChild(targetElement.closest('ul'))
  }

  removeUser(id) {
    this.users = this.users.filter((user) => user.id !== id)
  }

  addUser(user) {
    this.users = [...this.users, user]
  }

  loadZombieLike() {
    const izlVal = document.querySelectorAll('.isZombieLike')

    for (const idz of izlVal) {
      idz.innerText === 'True'
        ? idz.classList.add('like')
        : idz.classList.add('dislike')
    }
  }

  handleSubmit() {
    const { name, age, izl, id, memo } = this.getFormValues()

    // every AND, some OR
    // 다 true 여야 한다.
    const isSubmittable = [name, age, izl].every((value) => value)

    if (!isSubmittable) {
      alert('필수 입력 값을 입력해주세요.')
      return
    }

    const newUser = { name, age, izl, id, memo }

    this.addUser(newUser)
    this.createUserElement(newUser)
    this.resetFormValues()
  }
}

const Action = new Persons()
