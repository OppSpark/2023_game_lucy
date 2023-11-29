import * as THREE from '../source/three.module.js';

// Mesh 생성 클래스
export class MeshBuilder {
    constructor() {
        this.type = 'box';
        this.mat_type = 'standard';
        this.color = 0xffffff;
        this.basic_size = { width: 1, height: 1, depth: 1 };
        this.ring_size = { radius: 1, centerRadius: 1, upRadius: 1, downRadius: 1, innerRadius: 1, outerRadius: 1 };
        this.pos = { x: 0, y: 0, z: 0 };
        this.rot = { x: 0, y: 0, z: 0 };
        this.imgpath = null;
    }

    // geometry의 타입 설정
    setType(t) {
        this.type = t;
        return this;
    }

    // material의 타입 설정
    setMatType(mat) {
        this.matType = mat;
        return this;
    }

    // material의 색상 설정
    setColor(rgb) {
        this.color = rgb;
        return this;
    }

    // 생성객체의 좌표 설정
    setPos(pos_x, pos_y, pos_z) {
        this.pos = { x: pos_x, y: pos_y, z: pos_z };
        return this;
    }

    // 생성객체의 좌표 설정
    setRot(rot_x, rot_y, rot_z) {
        this.rot = { x: rot_x, y: rot_y, z: rot_z };
        return this;
    }

    // 생성객체의 가로 사이즈 설정
    setWidth(w) {
        this.width = w;
        return this;
    }

    // 생성객체의 세로 사이즈 설정
    setHeight(h) {
        this.height = h;
        return this;
    }

    // 생성객체의 깊이 사이즈 설정
    setDepth(d) {
        this.depth = d;
        return this;
    }

    setSize(w, h, d) {
        this.basic_size = { width: w, height: h, depth: d };
        return this;
    }

    setImgPath(path) {
        this.imgpath = path;
        return this;
    }

    // 생성객체의 반지름 사이즈 설정
    setRadius(r) {
        this.radius = r;
        return this;
    }

    // 생성객체의 중앙 반지름 사이즈 설정 (도넛)
    setCenterRadius(cr) {
        this.centerRadius = cr;
        return this;
    }

    // 생성객체의 위쪽 반지름 사이즈 설정 (실린더)
    setUpRadius(ur) {
        this.upRadius = ur;
        return this;
    }

    // 생성객체의 아래쪽 반지름 사이즈 설정 (실린더)
    setDownRadius(dr) {
        this.downRadius = dr;
        return this;
    }

    // 생성객체의 안쪽 반지름 사이즈 설정 (링)
    setInnerRadius(ir) {
        this.innerRadius = ir;
        return this;
    }

    // 생성객체의 바깥쪽 사이즈 설정 (링)
    setOuterRadius(or) {
        this.outerRadius = or;
        return this;
    }

    // 객체 생성
    build() {
        let material, geometry, mesh;

        if(this.type == 'sprite') {
            material = new THREE.SpriteMaterial(this.color);
            mesh = new THREE.Sprite(material);

            if (this.imgpath != null) {
                const texture = new THREE.TextureLoader().load(this.imgpath);
                this.sprite.material.map = texture;
            }

            return mesh;
        }
        else if(this.type == 'box') {
            geometry = new THREE.BoxGeometry(this.width, this.height);
        } else if(this.type == 'donut') {
            geometry = new THREE.TorusGeometry(this.radius, this.centerRadius);
        } else if(this.type == 'plane') {
            geometry = new THREE.PlaneGeometry(this.width, this.height);
        } else if(this.type == 'circle') {
            geometry = new THREE.CircleGeometry(this.radius);
        } else if(this.type == 'corn') {
            geometry = new THREE.ConeGeometry(this.radius, this.height);
        } else if(this.type == 'cylinder') {
            geometry = new THREE.CylinderGeometry(this.upRadius, this.downRadius, this.height);
        } else if(this.type == 'sphere') {
            geometry = new THREE.SphereGeometry(this.radius);
        } else if(this.type == 'ring') {
            geometry = new THREE.RingGeometry(this.innerRadius, this.outerRadius);
        } 

        if(this.matType == 'standard') {
            material = new THREE.MeshStandardMaterial({color: this.color});
        } else if(this.matType == 'phong') {
            material = new THREE.MeshPhongMaterial({color: this.color});
        } else if(this.matType == 'basic') {
            material = new THREE.MeshBasicMaterial({color: this.color});
        } else if(this.matType == 'line') {
            material = new THREE.LineBasicMaterial({color: this.color});
        } else if(this.matType == 'dashed') {
            material = new THREE.LineDashedMaterial({color: this.color});
        }
            
        mesh = new THREE.Mesh(geometry, material);

        mesh.position.set(this.pos.x, this.pos.y, this.pos.z);
        mesh.rotation.set(this.rot.x, this.rot.y, this.rot.z);

        return mesh;
    }
}