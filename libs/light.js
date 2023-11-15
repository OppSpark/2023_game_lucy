import * as THREE from '../source/three.module.js';

const makelight = () => {
    const light = new THREE.PointLight(0xffffff, 80, 1000);
    light.position.set(0, 2, -5);

    return light;
}

export default makelight;