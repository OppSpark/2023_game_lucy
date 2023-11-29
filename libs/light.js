import * as THREE from '../source/three.module.js';

/*
LightBuilder
    .setType() 라이트 타입을 설정합니다. (Point, Directional)

Point
    .setColor() 라이트 색상을 설정합니다. (기본값: 0xffffff, 범위: 0x000000 ~ 0xffffff)
    .setIntense() 라이트 세기를 설정합니다. (기본값: 10, 범위: 0 ~ )
    .setRange() 라이트 거리 범위를 설정합니다. (기본값: 100, 범위: 0 ~ )
    .setPos() 라이트 위치를 설정합니다. (기본값: 0, 0, 0)

Directional
    .setTarget() 라이트가 바라보는 방향을 설정합니다. (기본값: 0, 0, 0)

build
    .build() 카메라를 생성합니다.
*/

export class LightBuilder {
    constructor() {
        this.type = 'Point';
        this.color = 0xffffff;
        this.intense = 1;
        this.range = 0; 
        this.pos = {x: 0, y: 0, z: 0};
        this.target = null; 
    }

    setType(type) {
        this.type = type;
        return this;
    }

    setColor(color) {
        this.color = color;
        return this;
    }

    setIntense(intense) {
        this.intense = intense;
        return this;
    }

    setRange(range) {
        this.range = range;
        return this;
    }

    setPos(pos_x, pos_y, pos_z) {
        this.pos = { x: pos_x, y: pos_y, z: pos_z };
        return this;
    }

    setTarget(target) {
        this.target = target;
        return this;
    }

    build() {
        let light;

        if (this.type === 'Point') {
            light = new THREE.PointLight(this.color, this.intense, this.range);
        } else if (this.type === 'Directional') {
            light = new THREE.DirectionalLight(this.color, this.intense);
        } 

        light.position.set(this.pos.x, this.pos.y, this.pos.z);
        // if (this.target) {
        //     light.target = this.target;
        // }

        return light;
    }
}