
// import {init, exit} from 'myPackage'; // 에러 해결을 위해 myPackage.d.ts를 만든다
import {init, exit} from './myPackage2'; // allowJS를 true해주면 에러가 사라짐

// js 패키지 파일을 ts에서도 사용하고 싶으면 종종 정의해줘야한데

localStorage.getItem("A"); // "lib": ["DOM"]이라서 가능
// ㄴ> localStorage를 따라가면 node module 어딘가에 있는 
// 모듈의 타입을 선언해주는 declaration file을 볼수있따.
// localStorage.

init({
    debug: true,
    url:"true",
})

exit(1);

const a = (b:number, c:boolean) => {

}
