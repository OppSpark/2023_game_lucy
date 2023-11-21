export class AudioBuilder {
    // 1. 탭간격은 4로 통일 합니다
    // 2. 셋 컴포넌트는 동작을 가능한 하지 않도록 합니다
    // 3. 가능하면 리스너와 로더를 분리합니다
    constructor() {
      this.listener = new THREE.AudioListener();
      this.sound = new THREE.Audio(this.listener);
      this.audioLoader = new THREE.AudioLoader();
    }
  
    setVolume(volume) {
      this.sound.setVolume(volume);
      return this;
    }
  
    setLoop(loop) {
      this.sound.setLoop(loop);
      return this;
    }

    setRefDistance(refDistance) {
        this.sound.setRefDistance = refDistance;
        return this;
    }

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
  
export { Audio }