import * as THREE from '../source/three.module.js';
import makeCamera from '../libs/camera.js';
import { makeMesh, makeMesh2 } from '../libs/mesh.js';
import meshanim from '../libs/anim.js';
import makelight from '../libs/light.js';

const playscene1 = async (renderer) => {
    // 씬 생성
    const scene1 = new THREE.Scene();

    // 카메라 생성
    const camera = makeCamera();

    // 라이트 생성
    const light = makelight();
    scene1.add(light);

    // 메쉬 생성
    let mesh1 = makeMesh();
    scene1.add(mesh1);

    // 배경 추가
    const bg = makeMesh2();
    scene1.add(bg);
    
    // 게임 루프
    while (true) {
        // 에니메이션 추가
        mesh1 = meshanim(mesh1, 0.01);

        // 렌더링 및 프레임 갱신 블로킹
        renderer.render(scene1, camera);
        await new Promise((res) => {
            requestAnimationFrame(res);
        });
    }
}

export default playscene1;