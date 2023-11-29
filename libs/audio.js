export class AudioBuilder {
    // 1. 탭간격은 4로 통일 합니다
    // 2. 셋 컴포넌트는 동작을 가능한 하지 않도록 합니다
    // 3. 가능하면 리스너와 로더를 분리합니다
    constructor() {
      this.listener = new THREE.AudioListener();
      this.sound = new THREE.Audio(this.listener);
      this.audioLoader = new THREE.AudioLoader();
    }
  
    // 볼륨 조절
    setVolume(volume) {
      this.sound.setVolume(volume);
      return this;
    }
  
    // 반복재생 여부
    setLoop(loop) {
      this.sound.setLoop(loop);
      return this;
    }

    // 객체와의 거리로 사운드 조절 (되는지 확인안됨)
    setRefDistance(refDistance) {
        this.sound.setRefDistance = refDistance;
        return this;
    }

    // 사운드 로드
    loadSound(url, onLoadedCallback) {
      this.audioLoader.load(url, (buffer) => {
        this.sound.setBuffer(buffer);
        if (onLoadedCallback) {
          onLoadedCallback();
        }
      });
      return this;
    }
  
    build() {
      return this.sound;
    }
  }