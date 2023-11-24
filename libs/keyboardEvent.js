export class KeyboardBuilder{
    constructor(){
        this.input = {};
    }

    setKey(input, content ){
        this.input[input] = content;
        return this;
    }
    build(){
        document.addEventListener('keydown', (event) => {
            const KeyInput = event.key;
            if(this.input[KeyInput]){
                this.input[KeyInput]();
            }
        });
        return this;
    }

}





/*
function animate() {
                requestAnimationFrame(animate);

                // 플레이어 이동 로직
                if (isKeyPressed('ArrowLeft')) cube.position.x -= 0.1;
                if (isKeyPressed('ArrowRight')) cube.position.x += 0.1;
                if (isKeyPressed('ArrowUp')) cube.position.y += 0.1;
                if (isKeyPressed('ArrowDown')) cube.position.y -= 0.1;

                // 렌더링
                renderer.render(scene, camera);
            }

            // 키보드 입력 관련 변수 및 이벤트 리스너
            const keyStates = {};
            window.addEventListener('keydown', (event) => {
                keyStates[event.code] = true;
            });
            window.addEventListener('keyup', (event) => {
                keyStates[event.code] = false;
            });

            // 키보드 입력 상태 확인 함수
            function isKeyPressed(keyCode) {
                return keyStates[keyCode] === true;
            }

            // 애니메이션 시작
            animate();
*/