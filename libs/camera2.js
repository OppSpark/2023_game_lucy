import * as THREE from '../source/three.module.js';

// =============================================
// 해당 변수를 빌더패턴으로 제작합니다.
/*
const makeCamera = () => {
    const camera = new THREE.OrthographicCamera(width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );
    scene.add(camera);
}
*/

// =============================================

export class CameraBuilder2 {
    constructor() {
        this.left = 0
        this.right = 0
        this.top = 0;
        this.bottom = 0;
        this.near = 1;
        this.far = 1000;
    }
    setLeft(left) {
        this.left = left;
        return this;
    }

    setRight(right) {
        this.right = right;
        return this;
    }

    setWidth(top) {
        this.top = top;
        return this;
    }

    setHeight(bottom) {
        this.bottom = bottom;
        return this;
    }

    setNear(near) {
        this.near = near;
        return this;
    }

    setFar(far) {
        this.far = far;
        return this;
    }

    build() {
        //이걸 수정해야야하나?
        const camera = new THREE.OrthographicCamera(this.left, this.right, this.top, this.bottom, this.near, this.far);
        return camera;   
    }
}

// 카메라2 생성
/*
let camera = new CameraBuilder2()
    .setLeft(-1)
    .setRight(1)
    .setTop(1)
    .setBottom(-1)
    .setNear(-1)
    .setFar(1)
    .build();
*/