/*
render : 함수는 화면에 데이터를 그리는 용도
componentBindEvent : 이벤트를 달아주는 함수
initialize : 값을 초기화 해주는 함수
componentUpdateState : 컴포넌트의 값이 변경되었을때 동작하는 함수
*/

class Monsters {
  constructor() {
    this.monsters = []

    this.initialize()
  }

  initialize() {
    this.componentUpdateState()
    this.render()
    this.componentBindEvent()
  }

  render() {
    document.querySelector('.list').innerHTML = this.monsters.reduce(
      (acc, monster) => {
        return `
            ${acc}
             <li>
                <div>
                    <p class='remove' data-id='${monster.id}'>삭제</p>
                    <h2 class='name'>${monster.name}</h2>
                    <p class='status'>${monster.status}</p>
                    <p class='tx'>${monster.tx}</p>
                </div>
            </li>
          `
      },
      ``,
    )
  }

  componentBindEvent() {
    const nameEl = document.getElementById('name')
    const statusEl = document.getElementById('status')
    const txEl = document.getElementById('tx')

    document.getElementById('add_btn').addEventListener('click', () => {
      const nameValue = nameEl.value
      const statusValue = statusEl.value
      const txValue = txEl.value
      this.addMonsters(nameValue, statusValue, txValue)
    })
  }

  componentUpdateState() {
    const removeEl = document.querySelectorAll('.remove')
    for (const remove of removeEl) {
      remove.addEventListener('click', (e) => {
        this.removeMonsters(Number(e.target.dataset.id))
      })
    }
  }

  removeMonsters(id) {
    this.monsters = this.monsters.filter((monster) => {
      monster.id !== id
    })
    console.log(this.monsters)
    this.render()
  }

  addMonsters(name, status, info) {
    this.monsters = [
      ...this.monsters,
      {
        id: Date.now(),
        name: name,
        status: status,
        tx: info,
      },
    ]
    console.log(this.monsters)
    this.render()
  }
}

new Monsters()
