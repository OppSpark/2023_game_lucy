import * as THREE from '../source/three.module.js';

const makeMesh = () => {
    const geometry = new THREE.TorusGeometry(3, 1, 100, 100);
    const material = new THREE.MeshPhongMaterial({color: 0xffdd33});
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 0, -10);
    mesh.rotation.set(- Math.PI / 2, 0, 0);

    return mesh;
}

const makeMesh2 = () => {
    const geometry = new THREE.PlaneGeometry(30, 30);
    const material = new THREE.MeshStandardMaterial({color: 0xffffff});
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 0, -14);

    return mesh;
}

export { makeMesh, makeMesh2 };