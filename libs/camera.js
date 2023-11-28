import * as THREE from '../source/three.module.js';



    /*
    * 기초 설명
    * THREE.js 에서 제공하는 카메라 모듈은 2가지가 있습니다.
    * Perspective와 Orthographic 가 있습니다

    * ==================[작동 방식]==================
    Perspective
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
    * 
    * 
    Orthographic
    *   .setLeft() 시야 영역 왼쪽 경계를 나타낸다.
    *   .setRight() 시야 영역 오른ㄴ쪽 경계를 나타낸다.
    *   .setTop()  시야 위쪽 경계를 나타낸다.
    *   .setBottom()  시야 아랫쪽 경계를 나타낸다.
    *   .setNear()  시야 가까운 거리를 나타낸다.
    *   .setFar()  시야 먼 거리를 나타낸다.
    *   .build
    *

    * 
    */


export class CameraBuilder {
    constructor() {
        this.cameraType = 'Perspective';
        this.fov = 75;
        this.near = 0.1;
        this.far = 1000;
        this.pos_x = 0;
        this.pos_y = -5;
        this.pos_z = 0;
        this.rot_x = Math.PI / 5;
        this.rot_y = 0;
        this.rot_z = 0;
        this.left = 0;
        this.right = 0;
        this.top = 0;
        this.bottom = 0;
    }

    setCameraType(cameraType) {
        this.cameraType = cameraType;
        return this;
    }

    setFov(fov) {
        this.fov = fov;
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

    setPosX(pos_x) {
        this.pos_x = pos_x;
        return this;
    }

    setPosY(pos_y) {
        this.pos_y = pos_y;
        return this;
    }

    setPosZ(pos_z) {
        this.pos_z = pos_z;
        return this;
    }

    setPosXYZ(pos_x, pos_y, pos_z) {
        this.pos_x = pos_x;
        this.pos_y = pos_y;
        this.pos_z = pos_z;
        return this;
    }

    setRotX(rot_x) {
        this.rot_x = rot_x;
        return this;
    }

    setRotY(rot_y) {
        this.rot_y = rot_y;
        return this;
    }

    setRotZ(rot_z) {
        this.rot_z = rot_z;
        return this;
    }

    setRotXYZ(rot_x, rot_y, rot_z) {
        this.rot_x = rot_x;
        this.rot_y = rot_y;
        this.rot_z = rot_z;
        return this;
    }

    setLeft(left) {
        this.left = left;
        return this;
    }

    setRight(right) {
        this.right = right;
        return this;
    }

    setTop(top) {
        this.top = top;
        return this;
    }

    setBottom(bottom) {
        this.bottom = bottom;
        return this;
    }

    build() {
        let camera;
        if (this.cameraType === 'Perspective') {
            camera = new THREE.PerspectiveCamera(this.fov, window.innerWidth / window.innerHeight, this.near, this.far);
        } else if (this.cameraType === 'Orthographic') {
            camera = new THREE.OrthographicCamera(this.left, this.right, this.top, this.bottom, this.near, this.far);
        }
        camera.position.set(this.pos_x, this.pos_y, this.pos_z);
        camera.rotation.set(this.rot_x, this.rot_y, this.rot_z);
        return camera;
    }
}
