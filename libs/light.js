import * as THREE from '../source/three.module.js';

class LightBuilder {
    constructor() {
        this.type = 'point';  // 기본 라이트 타입은 point로 설정
        this.color = 0xffffff; // 기본 라이트 색상은 흰색으로 설정
        this.intensity = 1; // 기본 라이트 세기는 1로 설정
        this.distance = 0; // 기본 라이트 거리는 0으로 설정
        this.position = new THREE.Vector3(0, 0, 0); 
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

    setIntensity(intensity) {
        this.intensity = intensity;
        return this;
    }

    setDistance(distance) {
        this.distance = distance;
        return this;
    }

    setPosition(x, y, z) {
        this.position.set(x, y, z);
        return this;
    }

    setTarget(target) {
        this.target = target;
        return this;
    }

    build() {
        if (this.type === 'point') {
            const light = new THREE.PointLight(this.color, this.intensity, this.distance);
            light.position.copy(this.position);
            if (this.target) {
                light.target = this.target;
            }
            return light;
        } else if (this.type === 'directional') {
            // 디렉셔널 라이트 생성 로직 추가
            const light = new THREE.DirectionalLight(this.color, this.intensity);
            light.position.copy(this.position);
            if (this.target) {
                light.target = this.target;
            }
            return light;
        } // 다른 라이트 타입 추가 가능


        return null;  // 지원하지 않는 라이트 타입일 경우
    }
}

export { LightBuilder };