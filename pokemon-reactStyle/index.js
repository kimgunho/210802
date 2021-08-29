/*
# 구성안

# api{pokemon.api}로 불러와보자
# 10가지 포켓몬정보를 읽어오기
# 속성으로 원하는 색상넣기
# 속성으로 원하는 포켓몬 찾기

// 돔으로하지말자!!!~~
// 리엑트스테이트를 알아보자 !!!
// 제이쿼리방식을 쓰지말자...
// 이벤트 위임.. !!!!!

render : 함수는 화면에 데이터를 그리는 용도
componentBindEvent : 이벤트를 달아주는 함수
initialize : 값을 초기화 해주는 함수
componentUpdateState : 컴포넌트의 값이 변경되었을때 동작하는 함수
*/

class Pokemon {
  constructor() {
    this.pokemons = []
    this.pokemonTypes = []
    this.initialize()
  }

  initialize() {
    this.render()
    this.componentBindEvent()
    this.componentUpdateState()
  }

  componentBindEvent() {
    this.getPokemons()
  }

  render() {
    document.getElementById('list').innerHTML = this.pokemons.reduce(
      (acc, cur) => {
        return `
        ${acc}
        <li class='${cur.id}'>
          <h2>${cur.name}</h2>
          <img src='${cur.img}' alt='${cur.name}'>
          <p>
            ${cur.types.reduce((ac, cu) => {
              // forEach는 리턴이안된다.
              return `
               ${ac}
               <span>${cu.type.name}</span>
              `
            }, ``)}
          </p>  
        </li>
      `
      },
      ``,
    )

    document.getElementById('hash-nav').innerHTML = this.pokemonTypes.reduce(
      (acc, cur) => {
        return `
          ${acc}
          <li>${cur}</li>
        `
      },
      `<li>all</li>`,
    )
  }

  componentUpdateState() {
    this.getLoadTypePokemon()
  }

  getPokemons() {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=200`)
      .then((res) => res.json())
      .then((data) => {
        data.results.forEach((el) => {
          const { url } = el
          fetch(url)
            .then((res) => res.json())
            .then((data) => {
              const {
                name,
                id,
                sprites: { front_default: img },
                types,
              } = data

              this.pokemons = [
                ...this.pokemons,
                {
                  id: id,
                  name: name,
                  img: img,
                  types: types,
                },
              ]

              for (const type of types) {
                if (!this.pokemonTypes.includes(type.type.name)) {
                  this.pokemonTypes = [...this.pokemonTypes, type.type.name]
                }
              }

              // this.pokemonTypes = [
              //   ...this.pokemonTypes,
              //   types.map((el) => {
              //     return el.type.name
              //   }),
              // ]

              // console.log(this.pokemonTypes)
              this.render()
            })
        })
      })
  }

  getLoadTypePokemon() {
    document.getElementById('hash-nav').addEventListener('click', (e) => {
      const typeText = e.target.innerText
      /*
        1. 클릭후 어떤 타입을 원하는지 값가져오기
        2. 디스포켓몬즈에서 1번내용을 가지고 있지않는 리스트는 제외
        3. 그 값을 리랜더링
      */
      const newPokemons = this.pokemons.filter((el) => {
        for (const ax of el.types) {
          if (ax.type.name === typeText) {
            return ax.type.name
          }
        }
      })

      //start
      if (typeText !== 'all') {
        document.getElementById('list').innerHTML = newPokemons.reduce(
          (acc, cur) => {
            return `
            ${acc}
            <li class='${cur.id}'>
              <h2>${cur.name}</h2>
              <img src='${cur.img}' alt='${cur.name}'>
              <p>
                ${cur.types.reduce((ac, cu) => {
                  // forEach는 리턴이안된다.
                  return `
                   ${ac}
                   <span>${cu.type.name}</span>
                  `
                }, ``)}
              </p>  
            </li>
          `
          },
          ``,
        )
      } else {
        this.render()
      }

      //end
    })
  }
}
new Pokemon()

// return [
//   ...acc,
//   {
//     id: cur.id,
//     name: cur.name,
//     img: cur.img,
//     type: typeText,
//   },
// ]
