/*
# 구성안

# api{pokemon.api}로 불러와보자
# 10가지 포켓몬정보를 읽어오기
# 속성으로 원하는 포켓몬 찾기

render : 함수는 화면에 데이터를 그리는 용도
componentBindEvent : 이벤트를 달아주는 함수
initialize : 값을 초기화 해주는 함수
componentUpdateState : 컴포넌트의 값이 변경되었을때 동작하는 함수
*/

class Pokemons {
  constructor() {
    this.pokomons = []

    this.initialize()
  }

  initialize() {
    this.render()
    this.componentBindEvent()
  }

  render() {
    return (document.getElementById('list').innerHTML = this.pokomons.reduce(
      (acc, cuu) => {
        return `
            ${acc}
             <li>
                <div>
                    <p class='remove' data-id='${cuu.id}'>삭제</p>
                    <h2 class='name'>${cuu.name}</h2>
                    <p class='status'>${cuu.status}</p>
                    <p class='tx'>${cuu.tx}</p>
                </div>
            </li>                      
          `
      },
    ))
  }
}

new Pokemons()
