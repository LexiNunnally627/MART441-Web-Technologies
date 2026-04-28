function getScene() {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111111);
    return scene;
}

function getCamera() {
    var aspectRatio = window.innerWidth / window.innerHeight;
    var camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    camera.position.set(-10, -10, -10);
    camera.lookAt(0, 0, 0);
    return camera;
}

function getLight(scene) {
    var light = new THREE.PointLight(0xffffff, 1, 0);
    light.position.set(20, 50, 20);
    scene.add(light);

    var ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    return light;
}

function getRenderer() {
    var renderer = new THREE.WebGLRenderer({ antialias: true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    return renderer;
}

function getControls(camera, renderer) {
    var controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.zoomSpeed = 0.4;
    controls.panSpeed = 0.4;
    return controls;
}

function loadModel() {
    var loader = new THREE.OBJLoader();

    loader.load('model/animal.obj', function (object) {
        object.rotation.x = -Math.PI / 2;
        scene.add(object);

        document.querySelector('h1').style.display = 'none';
    });
}

function render() {
    requestAnimationFrame(render);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    sphere.rotation.y += 0.01;

    controls.update();
    renderer.render(scene, camera);
}

var scene = getScene();
var camera = getCamera();
var light = getLight(scene);
var renderer = getRenderer();
var controls = getControls(camera, renderer);

var geometryCube = new THREE.BoxGeometry();
var materialCube = new THREE.MeshStandardMaterial({
    color: 0x00ff00
});
var cube = new THREE.Mesh(geometryCube, materialCube);
scene.add(cube);

var materialLine = new THREE.LineBasicMaterial({
    color: 0x00ff00
});

var points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));
points.push(new THREE.Vector3(0, -10, 0));
points.push(new THREE.Vector3(-10, 0, 0));

var geometryLine = new THREE.BufferGeometry().setFromPoints(points);
var line = new THREE.Line(geometryLine, materialLine);

scene.add(line);

var geometrySphere = new THREE.SphereGeometry(1, 32, 32);
var materialSphere = new THREE.MeshStandardMaterial({
    color: 0xff0000
});

var sphere = new THREE.Mesh(geometrySphere, materialSphere);
scene.add(sphere);
sphere.position.set(2, 0, 0);

loadModel();
render();