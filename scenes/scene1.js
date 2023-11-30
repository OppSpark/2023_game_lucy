import * as THREE from '../source/three.module.js';
import { MeshBuilder } from '../libs/mesh.js';
import { CameraBuilder } from '../libs/camera.js';
import { LightBuilder } from '../libs/light.js';
import { KeyEventBuilder } from '../libs/keyEvent.js';
import { AudioBuilder } from '../libs/audio.js';

const playscene1 = async (renderer, keys) => {

    const scene1 = new THREE.Scene();
    scene1.background = new THREE.Color(0xbbbb99);

    const camera1 = new CameraBuilder()
        .setPos(0, -10, 4)
        .setRot(Math.PI / 2, 0, 0)
        .build();

    scene1.add(camera1);

    const light = new LightBuilder()
        .setIntense(50)
        .setRange(1000)
        .setPos(0, 0, 10)
        .build();

    scene1.add(light);

    const doughnut1 = new MeshBuilder()
        .setType('donut')
        .setRadius(3)
        .setCenterRadius(1)
        .setMatType('phong')
        .setColor(0xffdd33)
        .setPos(0, 0, 3)
        .setRot(- Math.PI / 2, 0, 0)
        .build();

    scene1.add(doughnut1);

    const doughnut2 = new MeshBuilder()
        .setType('donut')
        .setRadius(3)
        .setCenterRadius(1)
        .setMatType('phong')
        .setColor(0x33ddff)
        .setPos(10, 0, 3)
        .setRot(- Math.PI / 2, 0, 0)
        .build();

    scene1.add(doughnut2);

    const ground = new MeshBuilder()
        .setType('plane')
        .setMatType('standard')
        .setColor(0xffffff)
        .setWidth(100)
        .setHeight(10)
        .setPos(0, 0, 0)
        .build();

    scene1.add(ground);

    // function onUserInteration() {
    //     audio.play();
    //     document.removeEventListener('click', onUserInteration);
    // }

    // const audio = new AudioBuilder()
    // .loadSound('./audio/Title.wav', () => {
    //     document.addEventListener('click', onUserInteration);
    //     console.log('success');
    // })
    // .setVolume(0.1)
    // .setLoop(true)
    // .build();

    // scene1.add(audio);

    // document.addEventListener('click', () => {
    //     audio.play();
    // });

    const doughnut1KeyAct = new KeyEventBuilder()
        .setKey(['w'], [(obj) => { obj.position.y += 0.1; }])
        .setKey(['a'], [(obj) => { obj.position.x -= 0.1; }])
        .setKey(['s'], [(obj) => { obj.position.y -= 0.1; }])
        .setKey(['d'], [(obj) => { obj.position.x += 0.1; }])
        .build();

    // 모두 소문자로만 입력, 안그러면 shift + a의 경우 A가 입력되어서 키를 뗼때 a는 계속 눌린 상태로 남아있음
    const doughnut2KeyAct = new KeyEventBuilder()
        .setKey(['arrowup'], [(obj) => { obj.position.y += 0.1; }])
        .setKey(['arrowleft'], [(obj) => { obj.position.x -= 0.1; }])
        .setKey(['arrowdown'], [(obj) => { obj.position.y -= 0.1; }])
        .setKey(['arrowright'], [(obj) => { obj.position.x += 0.1; }])
        .setKey(['shift', 'arrowup'], [(obj) => { obj.position.y += 0.2; }, (obj) => { obj.position.x += 0.2; }])
        .setKey(['shift', 'arrowleft'], [(obj) => { obj.position.y -= 0.2; }, (obj) => { obj.position.x -= 0.2; }])
        .build();
    
    const camera1KeyAct = new KeyEventBuilder()
        .setKey(['w'], [(obj) => { obj.position.y += 0.1; }])
        .setKey(['a'], [(obj) => { obj.position.x -= 0.1; }])
        .setKey(['s'], [(obj) => { obj.position.y -= 0.1; }])
        .setKey(['d'], [(obj) => { obj.position.x += 0.1; }])
        .build();

    let tick = 0;
    while (true) {
        // 키보드 입력
        doughnut1KeyAct(keys, doughnut1);
        doughnut2KeyAct(keys, doughnut2);
        camera1KeyAct(keys, camera1);

        tick = tick + 1 % 60;

        // 렌더링 및 프레임 갱신 블로킹
        renderer.render(scene1, camera1);
        await new Promise((res) => {
            requestAnimationFrame(res);
        });
    }
}

export default playscene1;