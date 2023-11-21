import * as THREE from './three.module.js';

class MeshBuilder {
    constructor() {
        this.geometry = null;
        this.material = null;
        this.texture = null;
        this.position = new THREE.Vector3();
        this.rotation = new THREE.Euler();
    }
    // 메시 타입과 크기를 설정하는 메서드 추가
    setType(type, size) {
        switch (type) {
            //박스
            case 'box':
                this.geometry = new THREE.BoxGeometry(size.width, size.height, size.depth);
                break;
            //구체
            case 'sphere':
                this.geometry = new THREE.SphereGeometry(size.radius, 32, 32);
                break;
            //평면
            case 'plane':
                this.geometry = new THREE.PlaneGeometry(size.width, size.height);
                break;
            default:
                console.error('Unknown mesh type:', type);
                return this;
        }
        return this;
    }
    // 색상을 설정하는 메서드 추가
    setMaterial(color) {
        this.material = new THREE.MeshStandardMaterial({ color });
        return this;
    }
    // 텍스처를 설정하는 메서드 추가
    setTexture(textureUrl) {
        const textureLoader = new THREE.TextureLoader();
        this.texture = textureLoader.load(textureUrl);
        return this;
    }
    // 위치와 회전을 설정하는 메서드 추가
    setPosition(x, y, z) {
        this.position.set(x, y, z);
        return this;
    }
    // 회전을 설정하는 메서드 추가
    setRotation(x, y, z) {
        this.rotation.set(x, y, z);
        return this;
    }
    // 빌드!
    build() {
        // 필수 속성들이 모두 설정되었는지 확인
        if (!this.geometry || !this.material) {
            console.error('Geometry and material must be specified.');
            return null;
        }
        // 텍스처가 설정되었는지 확인
        if (this.texture) {
            this.material.map = this.texture;
        }

        const mesh = new THREE.Mesh(this.geometry, this.material);
        mesh.position.copy(this.position);
        mesh.rotation.copy(this.rotation);

        return mesh;
    }
}

export { MeshBuilder };