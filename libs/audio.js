class Audio {
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