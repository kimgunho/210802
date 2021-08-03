// js 동적 타입 = 반응에 쉬운 언어 
var a = ? 
typeof a // string
//
// 원시타입 = number, string, undfinded, null, boolean, Sybol

// 객체타입 = arr, obj


// typescrip가 왜 필요한가?
function add(a, b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new Error('인자와 값은 모두 숫자...')
    }
    return a + b
}

add(10, 20) good
add("짱","구") no
