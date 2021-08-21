/*
# 구성안

# api{pokemon.api}로 불러와보자
# 10가지 포켓몬정보를 읽어오기
# 속성으로 원하는 색상넣기
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
    this.repeatLoadFuction()
  }

  repeatLoadFuction() {
    const repeatMaxNum = 10
    for (let i = 1; i <= repeatMaxNum; i++) {
      this.getPokemon(i)
    }
  }

  getPokemon(num) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
      .then((res) => res.json())
      //   .then((data) => data)
      .then((data) => {
        const {
          name,
          id,
          sprites: { front_default: img },
          //   types: {
          //     0: {
          //       type: { name: typeName },
          //     },
          //   },
        } = data
        for (const typelist of data.types) {
          //   console.log(typelist.type.name)
          this.pushPokemonsList(name, id, img, typelist.type.name)
        }
      })
      .catch((err) => console.log(err))
  }

  pushPokemonsList(name, id, img, type) {
    this.pokomons = [
      ...this.pokomons,
      {
        id: id,
        name: name,
        img: img,
        type: type,
      },
    ]
    // console.log(this.pokomons)
    this.render()
  }

  getPokemonsType() {}

  render() {
    document.getElementById('list').innerHTML = this.pokomons.reduce(
      (acc, cuu) => {
        return `
            ${acc}
             <li>
                <div>
                    <p class='remove' data-id='${cuu.id}'>del</p>
                    <img src="${cuu.img}" alt='${cuu.name}'>
                    <h2 class='name'>${cuu.name}</h2>
                    <p class='type'>
                        <span>${cuu.type}</span>
                    </p>
                </div>
            </li>                      
          `
      },
      ``,
    )
  }
}

new Pokemons()
