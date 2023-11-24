import * as THREE from '../source/three.module.js';
import { MeshBuilder } from '../libs/mesh.js';
import { CameraBuilder } from '../libs/camera.js';
import { KerboradBuilder } from '../libs/keyboardEvent.js';
import { CameraBuilder2 } from '../libs/camera2.js';
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

    /*
    * ==================[작동 방식]==================
    *    .setFov(110) 화각을 설정합니다.
    *    .setNear()     근접평면을 설정합니다.
    *    .setFar()      원격평면을 설정합니다.
    *    .setPosX()     카메라 X좌표를 설정합니다.
    *    .setPosY()     카메라 Y좌표를 설정합니다.
    *    .setPosZ()     카메라 Z좌표를 설정합니다.
    *    .setPosXYZ(x, y, z)  X Y Z 좌표값을 한번에 설정합니다.
    *    .setRotX()     카메라 X축 회전을 설정합니다.
    *    .setRotY()     카메라 Y축 회전을 설정합니다.
    *    .setRotZ()     카메라 Z축 회전을 설정합니다.
    *    .setRotXYZ(x, y, z) X Y Z 좌표값을 한번에 설정합니다.
    *    .build(); 
    */

    // 카메라 생성
    const camera1 = new CameraBuilder()
        .setPosXYZ(0, 0, 10)
    .build();
    scene1.add(camera1);


    //카메라 2 입니다.
    let camera = new CameraBuilder2()
    .setLeft(-1)
    .setRight(1)
    .setTop(1)
    .setBottom(-1)
    .setNear(-1)
    .setFar(1)
    .build();
    


    
    keyboardInput = new KeyboardBuilder()
    .setKey('d', () => {console.log('성공')})
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
    const controls = new PointerLockControls(camera1, renderer.domElement);
    controls.movementSpeed = 0.5;
    controls.lookSpeed = 0.005;

    // 최초 클릭시 포인터락 활성화
    document.addEventListener('click', function () {
        controls.lock();
    }, false);

    // DragControls는 마우스로 메쉬를 드래그할 수 있음
    const dragControls = new DragControls([mesh1], camera1, renderer.domElement);

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
        renderer.render(scene1, camera1);
        await new Promise((res) => {
            requestAnimationFrame(res);
        });
    }
}

export default playscene1;