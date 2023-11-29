export class KeyEventBuilder {
    constructor() {
        this.acts = {};
    }

    setKey(keyarray, callbackarray) {
        // keyarray를 문자열로 변환하여 키로 사용합니다.
        const key = JSON.stringify(keyarray);
        this.acts[key] = callbackarray;
        return this;
    }

    build() {
        return (keys, object = null) => {
            for (let key in this.acts) {
                // 키를 다시 배열로 변환하여 사용합니다.
                const keyarray = JSON.parse(key);
                if (keyarray.every(key => keys[key])) {
                    this.acts[key].forEach(callback => { object ? callback(object) : callback(); });
                }
            }
        }
    }
}

export class MouseRaycasterBuilder {
    constructor(scene, camera) {
      // MouseRaycaster 객체를 생성
      this.mouseRaycaster = new MouseRaycaster(scene, camera);
    }
  
    // 클릭 이벤트를 처리하는 콜백 함수 설정
    onClick(callback) {
      this.mouseRaycaster.onClick(callback);
      return this; // 체이닝을 위해 자신을 반환
    }
  
    // 마우스 이동 이벤트를 처리하는 콜백 함수 설정
    onMouseMove(callback) {
      this.mouseRaycaster.onMouseMove(callback);
      return this; // 체이닝을 위해 자신을 반환
    }
  
    // 마우스 휠 스크롤 이벤트를 처리하는 콜백 함수 설정
    onMouseWheel(callback) {
      this.mouseRaycaster.onMouseWheel(callback);
      return this; // 체이닝을 위해 자신을 반환
    }
  
    // 마우스 드래그 시작 이벤트를 처리하는 콜백 함수 설정
    onDragStart(callback) {
      this.mouseRaycaster.onDragStart(callback);
      return this; // 체이닝을 위해 자신을 반환
    }
  
    // 마우스 드래그 중 이벤트를 처리하는 콜백 함수 설정
    onDrag(callback) {
      this.mouseRaycaster.onDrag(callback);
      return this; // 체이닝을 위해 자신을 반환
    }
  
    // 마우스 드래그 종료 이벤트를 처리하는 콜백 함수 설정
    onDragEnd(callback) {
      this.mouseRaycaster.onDragEnd(callback);
      return this; // 체이닝을 위해 자신을 반환
    }
  
    // 설정이 완료된 MouseRaycaster 객체를 반환
    build() {
      return this.mouseRaycaster;
    }
  }
  
  // 마우스 레이캐스터 클래스
export class MouseRaycaster {
    constructor(scene, camera) {
        this.scene = scene;
        this.camera = camera;
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        this.onClickCallback = null;
        this.onMouseMoveCallback = null;
        this.onMouseWheelCallback = null;
        this.onDragStartCallback = null;
        this.onDragCallback = null;
        this.onDragEndCallback = null;
        this.isDragging = false; // 드래그 상태를 저장하는 변수

        // 각종 이벤트 리스너를 추가
        document.addEventListener("click", this.handleMouseClick.bind(this));
        document.addEventListener("mousemove", this.handleMouseMove.bind(this));
        document.addEventListener("mousedown", this.handleMouseDown.bind(this));
        document.addEventListener("mouseup", this.handleMouseUp.bind(this));
        document.addEventListener("wheel", this.handleMouseWheel.bind(this));
    }
  
    // 클릭 이벤트 콜백을 설정하는 메서드
    onClick(callback) {
        this.onClickCallback = callback;
    }
  
    // 마우스 이동 이벤트 콜백을 설정하는 메서드
    onMouseMove(callback) {
        this.onMouseMoveCallback = callback;
    }
  
    // 마우스 휠 스크롤 이벤트 콜백을 설정하는 메서드
    onMouseWheel(callback) {
        this.onMouseWheelCallback = callback;
    }
  
    // 마우스 드래그 시작 이벤트 콜백을 설정하는 메서드
    onDragStart(callback) {
        this.onDragStartCallback = callback;
    }
  
    // 마우스 드래그 중 이벤트 콜백을 설정하는 메서드
    onDrag(callback) {
        this.onDragCallback = callback;
    }
  
    // 마우스 드래그 종료 이벤트 콜백을 설정하는 메서드
    onDragEnd(callback) {
        this.onDragEndCallback = callback;
    }
  
    // 클릭 이벤트를 처리하는 메서드
    handleMouseClick(event) {
        event.preventDefault();
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        this.raycaster.setFromCamera(this.mouse, this.camera);
        const intersects = this.raycaster.intersectObjects(
            this.scene.children,
            true
        );
        if (intersects.length > 0 && this.onClickCallback) {
            this.onClickCallback(intersects[0]);
        }
    }
  
    // 마우스 이동 이벤트를 처리하는 메서드
    handleMouseMove(event) {
        event.preventDefault();
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        this.raycaster.setFromCamera(this.mouse, this.camera);
        if (this.onMouseMoveCallback) {
            this.onMouseMoveCallback(this.mouse);
        }
        // 드래그 중일 때의 처리 추가
        if (this.isDragging && this.onDragCallback) {
            this.onDragCallback(event);
        }
    }
  
    // 마우스 휠 스크롤 이벤트를 처리하는 메서드
    handleMouseWheel(event) {
        if (this.onMouseWheelCallback) {
            this.onMouseWheelCallback(event.deltaY);
        }
    }
  
    // 마우스 드래그 시작 이벤트를 처리하는 메서드
    handleMouseDown(event) {
        this.isDragging = true;
        if (this.onDragStartCallback) {
            this.onDragStartCallback(event);
        }
    }
  
    // 마우스 드래그 종료 이벤트를 처리하는 메서드
    handleMouseUp(event) {
        this.isDragging = false;
        if (this.onDragEndCallback) {
            this.onDragEndCallback(event);
        }
    }
}
  