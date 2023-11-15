import * as THREE from '../source/three.module.js';

const meshanim = (mesh, rotvalue) => {
    mesh.rotation.x += rotvalue;
    mesh.rotation.y += rotvalue;

    return mesh;
}

export default meshanim;