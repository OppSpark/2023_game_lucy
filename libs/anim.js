import * as THREE from '../source/three.module.js';

export class pngAnimBuilder{
    constructor(sprite, imgpath) {
        this.sprite = sprite;
        this.imgpath = imgpath;
        this.horizontal = 1;
        this.vertical = 1;
        this.speed = 1;
    }

    setHorizontal(horizontal){
        this.horizontal = horizontal;
        return this;
    }

    setVertical(vertical){
        this.vertical = vertical;
        return this;
    }

    setSpeed(speed){
        this.speed = speed;
        return this;
    }
    
    build(){
        const texture = new THREE.TextureLoader().load(this.imgpath);
        texture.repeat.set(1 / this.horizontal, 1 / this.vertical);

        this.sprite.material.map = texture;
        this.sprite.material.needsUpdate = true;

        return (tick) => {
            // 로직 수정 필요
            // 1. tick에 의존해서 동작
            // 2. horizon이 다 돌면 vertical을 +1 해서 무한 루프
            // 3. speed는 1을 기본값으로 클수록 빠르게 동작
            if (tick % (this.horizontal * this.speed) == 0) {
                this.sprite.material.map.offset.x = (
                    this.sprite.material.map.offset.x + 1 / this.horizontal
                ) % 1;
                this.sprite.material.map.offset.y = (
                    this.sprite.material.map.offset.y + 1 / this.vertical
                ) % 1;
            }
        };
    }

}

// sepAnimbuilder
// coloranimbuilder