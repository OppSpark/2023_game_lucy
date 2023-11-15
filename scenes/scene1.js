import * as THREE from '../source/three.module.js';
import makeCamera from '../libs/camera.js';
import { makeMesh, makeMesh2 } from '../libs/mesh.js';

const playscene1 = async (renderer) => {
    const scene1 = new THREE.Scene();

    const camera = makeCamera();

    // 라이트 생성
    const light = new THREE.PointLight(0xffffff, 80, 1000);
    light.position.set(0, 2, -5);
    scene1.add(light);

    const mesh1 = makeMesh();
    scene1.add(mesh1);

    // 배경 추가
    const bg = makeMesh2();
    scene1.add(bg);

    let clock = new THREE.Clock();
    let timer = 10;
    
    // 특정 시간동안 회전
    while (timer > 0) {
        timer -= 0.01;
        mesh1.rotation.x += 0.01;
        mesh1.rotation.y += 0.01;
        renderer.render(scene1, camera);

        await new Promise((resolve) => {
            requestAnimationFrame(resolve);
        });
    }
}

export default playscene1;