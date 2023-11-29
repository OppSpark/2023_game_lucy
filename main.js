import playscene1 from './scenes/scene1.js';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let keys = {};
document.addEventListener('keydown', (e) => { keys[e.key] = true; }, false);
document.addEventListener('keyup', (e) => { keys[e.key] = false; }, false);

playscene1(renderer, keys);