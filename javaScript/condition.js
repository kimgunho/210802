// or (||), and (&&)
//삼항연산자
// if, if else, switch

const isHateZombie = true;

if (isHateZombie) {
    console.log('i hate...');
} else {
    console.log('i love zombie...')
}


// 문제의 코드
let MSG;

if (isHateZombie) {
    console.log('i hate...');
} else {
    console.log('i love zombie...')
}

// 개선
const msg = isHateZombie ? 'hate' : 'love...'

let lavel
if (level === '5') {
    lavel = '평민'
} else if (level === '4') {
    ...
}

//조건이 너무 많으면 switch 고려하자..
switch (level) {
    case '5': {
        lavel = '평민'
    }
    case '4': {
        lavel = '평민2'
    }
...
}

