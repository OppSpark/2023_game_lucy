import playscene1 from './scenes/scene1.js';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let keys = {};
// 대소문자 구분 없이 키 입력을 받기 위해 소문자로 통일
document.addEventListener('keydown', (e) => { keys[e.key.toLowerCase()] = true; }, false);
document.addEventListener('keyup', (e) => { keys[e.key.toLowerCase()] = false; }, false);

playscene1(renderer, keys);