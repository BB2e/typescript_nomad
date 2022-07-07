// 모듈의 타입을 선언해주는 declaration file

interface Config {
    url: string
}

declare module "myPackage" {
    function init(config: Config): boolean;
    function exit(code: number): number;
}