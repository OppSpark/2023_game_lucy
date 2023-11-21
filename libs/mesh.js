import * as THREE from '../source/three.module.js';

const makeMesh = () => {
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshBasicMaterial({color: 0xffdd33});
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

const makeMesh3 = () => {
    const geometry = new THREE.BoxGeometry(5,5);
    const material = new THREE.MeshPhongMaterial({color: 0xffffff});
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 0, -10);
    mesh.rotation.set(- Math.PI / 2, 0, 0);

    return mesh;
}

// Mesh 생성 클래스
class MeshBuilder {
    // 생성자에서 필요값 초기화
    constructor() {
        this.type = 'box';
        this.geometry = null;
        this.material = null;
        this.matType = 'standard';
        this.width = 1;
        this.height = 1;
        this.depth = 1;
        this.radius = 1;
        this.centerRadius = 1;
        this.upRadius = 1;
        this.downRadius = 1;
        this.innerRadius = 1;
        this.outerRadius = 1;
        this.color = 0xffffff;
        this.posX = 1;
        this.posY = 1;
        this.posZ = 1;
        this.rotX = 1;
        this.rotY = 1;
        this.rotZ = 1;
    }

    // geometry의 타입 설정
    setType(t) {
        this.type = t;
        return this;
    }

    // material의 타입 설정
    setMaterial(mat) {
        this.matType = mat;
        return this;
    }

    // material의 색상 설정
    setColor(rgb) {
        this.color = rgb;
        return this;
    }

    // 생성객체의 x 좌표 설정
    setPosX(x) {
        this.posX = x;
        return this;
    }

    // 생성객체의 y 좌표 설정
    setPosY(y) {
        this.posY = y;
        return this;
    }

    // 생성객체의 z 좌표 설정
    setPosZ(z) {
        this.posZ = z;
        return this;
    }

    // 생성객체의 x축 회전 설정
    setRotX(x) {
        this.rotX = x;
        return this;
    }

    // 생성객체의 y축 회전 설정
    setRotY(y) {
        this.rotY = y;
        return this;
    }

    // 생성객체의 z축 회전 설정
    setRotZ(z) {
        this.rotZ = z;
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
        if(this.type == 'box') {
            this.geometry = new THREE.BoxGeometry(this.width, this.height);
        } else if(this.type == 'donut') {
            this.geometry = new THREE.TorusGeometry(this.radius, this.centerRadius);
        } else if(this.type == 'plane') {
            this.geometry = new THREE.PlaneGeometry(this.width, this.height);
        } else if(this.type == 'circle') {
            this.geometry = new THREE.CircleGeometry(this.radius);
        } else if(this.type == 'corn') {
            this.geometry = new THREE.ConeGeometry(this.radius, this.height);
        } else if(this.type == 'cylinder') {
            this.geometry = new THREE.CylinderGeometry(this.upRadius, this.downRadius, this.height);
        } else if(this.type == 'sphere') {
            this.geometry = new THREE.SphereGeometry(this.radius);
        } else if(this.type == 'ring') {
            this.geometry = new THREE.RingGeometry(this.innerRadius, this.outerRadius);
        }

        if(this.matType == 'sprite') {
            this.material = new THREE.SpriteMaterial();
        } else if(this.matType == 'standard') {
            this.material = new THREE.MeshStandardMaterial(this.color);
        } else if(this.matType == 'phong') {
            this.material = new THREE.MeshPhongMaterial(this.color);
        }

        if(this.matType == 'sprite') {
            this.mesh = new THREE.Sprite(this.material);
        } else {
            this.mesh = new THREE.Mesh(this.geometry, this.material);
        }

        return this.mesh;
    }
}

export { makeMesh, makeMesh2, makeMesh3, MeshBuilder };