/*
* 키보드 입력 구현할 목록
*
* 1. 키보드 입력 시 어떤 값이 입력이 되었는지 확인 하는것 (consol.log() 로 출력)
* 2. 특정 키 ex) " (W) " 를 설정하고 W 입력 시 consol.log() 로 출력,  다른 키 입력시 반응 X
* 3. 특정 키를 2번(연타) 시 출력
* 4. 특정 키를 ex) "(W) + (D)" 를 동시에 누르면 출력
*
*/

let key = {};

class  builder () => {
    constructor() {
        this.key = key;
    }
    setKey(key, anim) {
        key= key;
        function = function;
        return this;
    }
    seanim() {

    }
    build(){
        for(let i = 0; i < key.length; i++){
            if(key[i] == keyw){
                anim();
            }
        }

        return 함수타입
    }
}

const key = new builder().setKey('w', () => {}).setKey('d', () => {}).setKey('s', () => {}).setKey('a', () => {}).build();



document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    key = keyName;
});