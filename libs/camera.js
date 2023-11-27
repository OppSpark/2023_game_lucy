import * as THREE from '../source/three.module.js';

/*
const makeCamera = () => {
    const camera = new THREE.OrthographicCamera(width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );
    scene.add(camera);
}
*/

export class CameraBuilder {
    // 1. PerspectiveCamera 이외의 카메라도 지원하도록 합니다
    constructor(){
        this.type = 'perspective';

        this.fov = 75;
        this.near = 0.1;
        this.far = 1000;

        this.pos_x = 0;
        this.pos_y = -5;
        this.pos_z = 0;

        this.rot_x = Math.PI / 5;
        this.rot_y = 0;
        this.rot_z = 0;

        this.look_x = 0;
        this.look_y = 0;
        this.look_z = 0;
    }

    setType(type){
        this.type = type;
        return this;
    }

    setFov(fov){
        this.fov = fov;
        return this;
    }
    
    setNear(near){
        this.near = near;
        return this;
    }
    
    setFar(far){
        this.far = far;
        return this;
    }


    setPosX(pos_x){
        this.pos_x = pos_x;
        return this;
    }
    
    setPosY(pos_y){
        this.pos_y = pos_y;
        return this;
    }
    
    setPosZ(pos_z){
        this.pos_z = pos_z;
        return this;
    }

    setPosXYZ(pos_x, pos_y, pos_z){
        this.pos_x =  pos_x;
        this.pos_y = pos_y;
        this.pos_z = pos_z;
        return this;
    }

    setRotX(rot_x){
        this.rot_x = rot_x;
        return this;
    }
    
    setRotY(rot_y){
        this.rot_y = rot_y;
        return this;
    }
    
    setRotZ(rot_z){
        this.rot_z = rot_z;
        return this;
    }

    setRotXYZ(rot_x, rot_y, rot_z){
        this.rot_x = rot_x;
        this.rot_y = rot_y;
        this.rot_z = rot_z;
        return this;
    }

    setLookX(look_x){
        this.look_x = look_x;
        return this;
    }

    setLookY(look_y){
        this.look_y = look_y;
        return this;
    }

    setLookZ(look_z){
        this.look_z = look_z;
        return this;
    }

    setLookXYZ(look_x, look_y, look_z){
        this.look_x = look_x;
        this.look_y = look_y;
        this.look_z = look_z;
        return this;
    }

    build(){
        const camera = new THREE.PerspectiveCamera(
            this.fov, window.innerWidth / window.innerHeight, this.near, this.far   //화각
        );
        camera.position.set(this.pos_x, this.pos_y, this.pos_z);  //좌 우, 앞 뒤 ,상 하
        camera.rotation.set(this.rot_x, this.rot_y, this.rot_z);  //수직, 수평, 회전
        camera.lookAt(this.look_x, this.look_y, this.look_z);  //카메라가 바라보는 방향

        return camera;
    }
}