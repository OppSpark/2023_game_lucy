import * as THREE from '../source/three.module.js';


/*
const makeCamera = () => {
    const camera = new THREE.PerspectiveCamera(
        75, window.innerWidth / window.innerHeight,0.1, 1000   //화각
    );
    camera.position.set(0,-5, 0);  //좌 우, 앞 뒤 ,상 하
    camera.rotation.set(Math.PI / 5, 0, 0);  //수직, 수평, 회전

    return camera;
}
*/



/*
    * ==================[빌더 패턴 구현]==================
*/



export class camera_builder{
    constructor(){
        this.fov = 75;
        this.near = 0.1;
        this.far = 1000;

        this.pos_x = 0;
        this.pos_y = -5;
        this.pos_z = 0;

        this.rot_x = Math.PI / 5;
        this.rot_y = 0;
        this.rot_z = 0;
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

    build(){

    const camera = new THREE.PerspectiveCamera(
        this.fov, window.innerWidth / window.innerHeight, this.near, this.far   //화각
    );
    camera.position.set(this.pos_x, this.pos_y, this.pos_z);  //좌 우, 앞 뒤 ,상 하
    camera.rotation.set(this.rot_x, this.rot_y, this.rot_z);  //수직, 수평, 회전

    return camera;
    }
}

export default camera_builder;