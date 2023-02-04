import {Color,
        Scene,
        PerspectiveCamera,
        DirectionalLight,
        AmbientLight,
        BoxGeometry,
        Mesh,
        MeshStandardMaterial,
        WebGLRenderer, } from "three";

const width = 200;
const height = 200;

const scene = new Scene();
scene.background = new Color('black');

const camera = new PerspectiveCamera();
camera.position.z = 3;

const geometry = new BoxGeometry(1, 1, 1);

const material = new MeshStandardMaterial({
	color: 'white',
	metalness: 0.5,
    roughness: 0.5
});

const cube = new Mesh(geometry, material);
scene.add(cube);

const directionalLight = new DirectionalLight();
directionalLight.position.set(3, 3, 3).normalize();
scene.add(directionalLight);

const ambientLight = new AmbientLight();
scene.add(ambientLight);


let renderer;

const animate = () => {
	requestAnimationFrame(animate);
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render(scene, camera);
};

const resize = () => {
	renderer.setSize(width, height);
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
};

export const createScene = (el) => {
	renderer = new WebGLRenderer({ antialias: true, canvas: el });
    resize();
	animate();
};

