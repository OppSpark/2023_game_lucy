import * as THREE from '../source/three.module.js';

/*
CameraBuilder
    .setType() 라이트 타입을 설정합니다. (Perspective, Orthographic)

Perspective
    .setFov()       시야각을 설정합니다. (기본값 75, 단위는 degree)
    .setAspect()    카메라의 종횡비를 설정합니다. (기본값 window.innerWidth / window.innerHeight)
    .setNear()      카메라가 볼 수 있는 가장 가까운 거리를 설정합니다. (기본값 0.1, 단위는 meter)
    .setFar()       카메라가 볼 수 있는 가장 먼 거리를 설정합니다. (기본값 1000, 단위는 meter)
    .setPosX()      카메라 X좌표를 설정합니다. (기본값 0, 단위는 meter)
    .setPosY()      카메라 Y좌표를 설정합니다. (기본값 0, 단위는 meter)
    .setPosZ()      카메라 Z좌표를 설정합니다. (기본값 0, 단위는 meter)
    .setPos(x, y, z)    X Y Z 좌표값을 한번에 설정합니다.
    .setRotX()      카메라 X축 회전을 설정합니다. (기본값 0, 단위는 radian)
    .setRotY()      카메라 Y축 회전을 설정합니다. (기본값 0, 단위는 radian)
    .setRotZ()      카메라 Z축 회전을 설정합니다. (기본값 0, 단위는 radian)
    .setRot(x, y, z) X Y Z 좌표값을 한번에 설정합니다.
    .setDirX()      카메라가 바라보는 x축 방향을 설정합니다. (기본값 0, 벡터값)
    .setDirY()      카메라가 바라보는 y축 방향을 설정합니다. (기본값 0, 벡터값)
    .setDirZ()      카메라가 바라보는 z축 방향을 설정합니다. (기본값 0, 벡터값)
    .setDir(x, y, z) X Y Z 좌표값을 한번에 설정합니다.

Orthographic
    .setBoundL()      시야 영역 왼쪽 경계를 나타낸다.
    .setBoundR()     시야 영역 오른쪽 경계를 나타낸다.
    .setBoundT()       시야 위쪽 경계를 나타낸다.
    .setBoundB()    시야 아랫쪽 경계를 나타낸다.
    .setBound(left, right, top, bottom)   시야 영역의 경계를 한번에 설정합니다.

build
    .build() 카메라를 생성합니다.
*/


export class CameraBuilder {
    constructor() {
        this.type = 'Perspective';

        this.fov = 75;
        this.aspect = window.innerWidth / window.innerHeight;
        this.near = 0.1;
        this.far = 1000;
        this.pos = {x: 0, y: 0, z: 0};
        this.rot = {x: 0, y: 0, z: 0};
        this.dir = {x: 0, y: 0, z: 0};

        this.border = {left: 0, right: 0, top: 0, bottom: 0};
    }

    setType(type){
        this.type = type;
        return this;
    }

    setFov(fov) {
        this.fov = fov;
        return this;
    }

    setAspect(aspect) {
        this.aspect = aspect;
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

    setPos(pos_x, pos_y, pos_z) {
        this.pos = {x: pos_x, y: pos_y, z: pos_z};
        return this;
    }

    setPosX(pos_x) {
        this.pos.x = pos_x;
        return this;
    }

    setPosY(pos_y) {
        this.pos.y = pos_y;
        return this;
    }

    setPosZ(pos_z) {
        this.pos.z = pos_z;
        return this;
    }

    setRot(rot_x, rot_y, rot_z) {
        this.rot = {x: rot_x, y: rot_y, z: rot_z};
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

    setDir(dir_x, dir_y, dir_z){
        this.dir = {x: dir_x, y: dir_y, z: dir_z};
        return this;
    }

    setDirX(dir_x){
        this.dir.x = dir_x;
        return this;
    }

    setDirY(dir_y){
        this.dir.y = dir_y;
        return this;
    }

    setDirZ(dir_z){
        this.dir.z = dir_z;
        return this;
    }

    setBound(left, right, top, bottom){
        this.border = {left: left, right: right, top: top, bottom: bottom};
        return this;
    }

    setBoundL(left){
        this.border.left = left;
        return this;
    }

    setBoundR(right){
        this.border.right = right;
        return this;
    }

    setBoundT(top){
        this.border.top = top;
        return this;
    }

    setBoundB(bottom){
        this.border.bottom = bottom;
        return this;
    }

    build() {
        let camera;

        if (this.type === 'Perspective') {
            camera = new THREE.PerspectiveCamera(
                this.fov, this.aspect, this.near, this.far
            );

            camera.lookAt(this.dir.x, this.dir.y, this.dir.z);

        } else if (this.type === 'Orthographic') {
            camera = new THREE.OrthographicCamera(
                this.border.left, this.border.right, this.border.top, this.border.bottom, this.near, this.far
            );

        }
        
        camera.position.set(this.pos.x, this.pos.y, this.pos.z);
        camera.rotation.set(this.rot.x, this.rot.y, this.rot.z);

        return camera;
    }
}
