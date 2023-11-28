import * as THREE from '../source/three.module.js';
import { MeshBuilder } from '../libs/mesh.js';
import { CameraBuilder } from '../libs/camera.js';
import { KeyboardBuilder } from '../libs/keyboardEvent.js';
import { pngAnimBuilder } from '../libs/anim.js';
import makelight from '../libs/light.js';
import { DragControls } from '../source/controls/DragControls.js';
import { FirstPersonControls } from '../source/controls/FirstPersonControls.js';
import { PointerLockControls } from '../source/controls/PointerLockControls.js';

const playscene1 = async (renderer) => {
    // 1. 각자 생성한 주석은 사용이 끝나면 지워주세요
    // 2. 각자 작업중인 빌더는 다른 사람이 이해하기 쉽도록 예시를 남겨주세요

    // 씬 생성
    const scene1 = new THREE.Scene();


    // 카메라 생성 
    let camera = new CameraBuilder()
    .setCameraType('Perspective') //카메라 타입 설정 (Perspective, Orthographic ) 2가지가 있습니다.
    .build();


    //키보드 입력
    let keyboardInput = new KeyboardBuilder()  //키보드 입력입니다. 해당 키를 누르면 괄호 안 값을 받아옵니다.
    .setKey('T', () => {console.log('성공[T]')})  
    .setKey('U', () => {console.log('성공[U]')})
    .build();


    // 라이트 생성
    const light = makelight();
    scene1.add(light);

    // 메쉬 생성
    let mesh1 = new MeshBuilder()
    .setType('donut')
    .setMaterial('phong')
    .setRadius(3)
    .setCenterRadius(1)
    .build();
    //     .setPosX(0).setPosY(0).setPosZ(-10)
    //     .setRotX(- Math.PI / 2).setRotY(0).setRotZ(0)
    //let mesh2 = makeMesh3();
    //let mesh3 = new MeshBuilder().setType('box').setMaterial(0x00ff33).setSize(10, 10).setPos(0, 0, -10).setRot(- Math.PI / 2, 0, 0).build();
    scene1.add(mesh1);
    //scene1.add(mesh2);
    //scene1.add(mesh3);

    // 배경 추가
    const bg = new MeshBuilder()
        .setType('plane')
        .setMaterial('standard')
        .setColor(0x00ffff)
        .setWidth(30)
        .setHeight(30)
        // .setPosX(0).setPosY(0).setPosZ(-14)
        .build();
    scene1.add(bg);
    
    let tick = 0;       

    // const rockmananim = new pngAnimBuilder(sprite, '../img/testrockman.png')
    //     .setHorizontal(5)
    //     .setVertical(2)
    //     .setSpeed(1)
    //     .build();

    // first person 컨트롤은 마우스가 정중앙으로부터 멀어지면 계속 회전함
    // const controls = new FirstPersonControls(camera1, renderer.domElement);
    // controls.movementSpeed = 0.5;
    // controls.lookSpeed = 0.005;

    // pointerlock 컨트롤은 마우스가 움직일떄만 회전함
    const controls = new PointerLockControls(camera, renderer.domElement);
    controls.movementSpeed = 0.5;
    controls.lookSpeed = 0.005;

    // 최초 클릭시 포인터락 활성화
    document.addEventListener('click', function () {
        controls.lock();
    }, false);

    // DragControls는 마우스로 메쉬를 드래그할 수 있음
    const dragControls = new DragControls([mesh1], camera, renderer.domElement);

    // 키입력을 받기 위한 객체
    let keys = {
        'w': false,
        'a': false,
        's': false,
        'd': false
    };
    
    // 키 이벤트 핸들러
    document.addEventListener('keydown', function(event) {
        if (event.key === 'w' || event.key === 'a' || event.key === 's' || event.key === 'd') {
            keys[event.key] = true;
        }
    }, false);
    
    document.addEventListener('keyup', function(event) {
        if (event.key === 'w' || event.key === 'a' || event.key === 's' || event.key === 'd') {
            keys[event.key] = false;
        }
    }, false);

    while (true) {

        // rockmananim(tick);

        // controls.update();
        if (keys['w']) mesh1.position.z -= 0.1;
        if (keys['a']) mesh1.position.x -= 0.1;
        if (keys['s']) mesh1.position.z += 0.1;
        if (keys['d']) mesh1.position.x += 0.1;

        tick = tick + 1 % 60;
        // console.log(tick);

        // 렌더링 및 프레임 갱신 블로킹
        renderer.render(scene1, camera);
        await new Promise((res) => {
            requestAnimationFrame(res);
        });
    }
}

export default playscene1;