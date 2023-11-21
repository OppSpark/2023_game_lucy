import * as THREE from '../source/three.module.js';
import { makeMesh, makeMesh2, makeMesh3, MeshBuilder } from '../libs/mesh.js';
import makeCamera, { camera_builder } from '../libs/camera.js';
import ApngAnimbuilder from '../libs/anim.js';
import makelight from '../libs/light.js';

const playscene1 = async (renderer) => {
    // 씬 생성
    const scene1 = new THREE.Scene();

    /*
    * ==================[작동 방식]==================
    *
    *    .setFov(110) 화각을 설정합니다.
    *    .setNear()     근접평면을 설정합니다.
    *    .setFar()      원격평면을 설정합니다.
    *    .setPosX()     카메라 X좌표를 설정합니다.
    *    .setPosY()     카메라 Y좌표를 설정합니다.
    *    .setPosZ()     카메라 Z좌표를 설정합니다.
    *    .setRotX()     카메라 X축 회전을 설정합니다.
    *    .setRotY()     카메라 Y축 회전을 설정합니다.
    *    .setRotZ()     카메라 Z축 회전을 설정합니다.
    *    .build(); 
    * 
    */

    // 카메라 생성
    const cameraBuilder = new camera_builder(); // Create an instance of camera_builder
    const camera = cameraBuilder
    /*
    .setFov(110)
    .setNear()
    .setFar()
    .setPosX()
    .setPosY()
    .setPosZ()
    .setRotX()
    .setRotY()
    .setRotZ()
    */
    .build();

    // 라이트 생성
    const light = makelight();
    scene1.add(light);

    // 메쉬 생성
    let mesh1 = new MeshBuilder().setType('donut').setMaterial('phong').setRadius(3).setCenterRadius(1).setPosX(0).setPosY(0).setPosZ(-10).setRotX(- Math.PI / 2).setRotY(0).setRotZ(0).build();
    //let mesh2 = makeMesh3();
    //let mesh3 = new MeshBuilder().setType('box').setMaterial(0x00ff33).setSize(10, 10).setPos(0, 0, -10).setRot(- Math.PI / 2, 0, 0).build();
    scene1.add(mesh1);
    //scene1.add(mesh2);
    //scene1.add(mesh3);

    // 배경 추가
    const bg = new MeshBuilder().setType('plane').setMaterial('standard').setWidth(30).setHeight(30).setPosX(0).setPosY(0).setPosZ(-14).build();
    scene1.add(bg);
    
    let tick = 0;

    const rockmananim = new ApngAnimbuilder(sprite, '../img/testrockman.png')
        .setHorizontal(5)
        .setVertical(2)
        .setSpeed(1)
        .build();

    while (true) {

        rockmananim(tick);

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