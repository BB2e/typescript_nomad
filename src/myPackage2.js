// @ts-check
// ㄴ> js파일이지만 ts에게 체크를 하라는 뜻

/**
 * Initializes the project // 어떤 함수인지 설명
 * @param {object} config // 입력값의 이름은 config이고 타입은 객체
 * @param {boolean} config.debug // config.debug에는 불린값이 있다.
 * @param {string} config.url // config.url에는 string이 들어있음
 * @return boolean // boolean을 return함
 */

// ㄴ> 타입스크립트가 위의 코멘트를 읽고 타입을 체크해줄것.

export function init(config){
    return true;
}


/**
 * Exit the program
 * @param {number} code // 받는 입력값 이름은 code이고 타입은 number
 * @return {number}
 */

export function exit(code){
    return code + 1;
}