// render : 함수는 화면에 데이터를 그리는 용도
// componentBindEvent : 이벤트를 달아주는 함수
// initialize : 값을 초기화 해주는 함수
// componentUpdateState : 컴포넌트의 값이 변경되었을때 동작하는 함수

// 1. initialize
// 2. componentUpdateState
// 3. render
// 4. componentBindEvent

class SigninPage {
  constructor() {
    this.users = [
      //   {
      //     id: 0,
      //     email: 'yuyukfg@naver.com',
      //     passwold: '1234',
      //   },
    ] // {id : 0, email : 'ss', pass : '1234'}
    this.initialize()
  }
  initialize() {
    // this.componentUpdateState() // 없데이트된 상태 값 최신화
    this.render() // 최신화된 데이터 그림
    this.componentBindEvent() // 이벤트 바인딩
  }
  //   componentUpdateState() {}
  render() {
    document.querySelector('.wrap_user').innerHTML = this.users.reduce(
      (prev, user) => {
        return `
            ${prev}
            <div>
                이메일 : ${user.email}
            </div>
        `
      },
      ``,
    )
  }
  componentBindEvent() {
    const emailEl = document.querySelector('#email')
    const passwordEl = document.querySelector('#password')

    document.querySelector('#btn_login').addEventListener('click', () => {
      const email = emailEl.value
      const passwold = passwordEl.value

      this.addUser(email, passwold)
    })
  }

  addUser(email, passwold) {
    this.users = [
      ...this.users,
      {
        id: this.users.length + 1,
        email,
        passwold,
      },
    ]
    this.render()
  }
}

new SigninPage()
