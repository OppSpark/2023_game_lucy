import * as THREE from '../source/three.module.js';

const makeCamera = () => {
    const camera = new THREE.PerspectiveCamera(
        75, window.innerWidth / window.innerHeight, 0.1, 1000
    );
    camera.position.set(0, -10, 0);
    camera.rotation.set(Math.PI / 3, 0, 0);

    return camera;
}

export default makeCamera;