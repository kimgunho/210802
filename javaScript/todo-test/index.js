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
    this.render()
    this.componentBindEvent()
  }

  render() {
    document.querySelector('.list').innerHTML = this.monsters.reduce(
      (acc, monster) => {
        return `
            ${acc}
             <li class='${monster.id}'>
                <div>
                    <p>${monster.id}</p>
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

  addMonsters(name, status, info) {
    this.monsters = [
      ...this.monsters,
      {
        id: this.monsters.length + 1,
        name: name,
        status: status,
        tx: info,
      },
    ]

    this.render()
  }
}

new Monsters()
