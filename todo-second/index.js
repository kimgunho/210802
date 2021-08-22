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
    this.pokomonTypes = []
    this.initialize()
  }

  initialize() {
    this.repeatLoadFuction()
    this.render()
    // this.componentBindEvent()
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
      .then((data) => {
        const {
          name,
          id,
          sprites: { front_default: img },
          types: {
            0: {
              type: { name: typeName },
            },
          },
        } = data
        this.pushPokemonsList(name, id, img, typeName)
        this.resetPokemonTypes(typeName)
      })
      .catch((err) => console.error(err))
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
    this.render()
  }

  resetPokemonTypes(type) {
    if (!this.pokomonTypes.includes(type)) {
      this.pokomonTypes = [...this.pokomonTypes, type]
    }

    this.render()
  }

  render() {
    document.getElementById('list').innerHTML = this.pokomons.reduce(
      (acc, cuu) => {
        return `
            ${acc}
             <li class="${cuu.type}">
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

    document.querySelector('.hash-nav').innerHTML = this.pokomonTypes.reduce(
      (acc, cur) => {
        return `
        ${acc}
        <li>${cur}</li>
        `
      },
      `<li class='all'>all</li>`,
    )

    this.componentBindEvent()
  }

  componentBindEvent() {
    this.typeBackground()
    this.selectHashType()
  }

  selectHashType() {
    const selectEl = document.querySelectorAll('.hash-nav li')
    const pokemonEls = document.querySelectorAll('#list li')
    const REMOVEKEY = 'remove'

    for (const selectBtn of selectEl) {
      selectBtn.addEventListener('click', (e) => {
        const typeName = e.target.innerText

        for (const pokemon of pokemonEls) {
          pokemon.classList.remove(REMOVEKEY)
          if (pokemon.className !== typeName) {
            selectBtn.className === 'all'
              ? pokemon.classList.remove(REMOVEKEY)
              : pokemon.classList.add(REMOVEKEY)
          }
        }
      })
    }
  }

  typeBackground() {
    const typeEls = document.querySelectorAll('span')
    for (const typeEl of typeEls) {
      switch (typeEl.innerText) {
        case 'fire':
          typeEl.classList.add('fire')
          break
        case 'grass':
          typeEl.classList.add('grass')
          break
        case 'water':
          typeEl.classList.add('water')
          break
        case 'bug':
          typeEl.classList.add('bug')
          break
        case 'psychic':
          typeEl.classList.add('psychic')
          break
        case 'ground':
          typeEl.classList.add('ground')
          break
        case 'poison':
          typeEl.classList.add('poison')
          break
        case 'normal':
          typeEl.classList.add('normal')
          break
        case 'fairy':
          typeEl.classList.add('fairy')
          break
        case 'fighting':
          typeEl.classList.add('fighting')
          break
        case 'electric':
          typeEl.classList.add('electric')
          break

        default:
        // console.log(`no`)
      }
    }
  }
}

new Pokemons()
