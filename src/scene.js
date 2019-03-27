var THREE = require('three');

var camera, scene, renderer;
var geometry, material, mesh;

init();

function init() {

    //create scene
    scene = new THREE.Scene();
    //create camera
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    // create render and its shadows
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWidth, window.innerHeight);

    //create a cube

    cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
    cubeMaterial = new THREE.MeshLambertMaterial({
        color: 0xFF0000,
        wireframe: false
    });
    cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(-4, 2, 0);

    planeGeometry = new THREE.PlaneGeometry(60, 20);
    planeMaterial = new THREE.MeshLambertMaterial({
        color: 0xAAAAAA
    });

    plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.set(15, 0, 0);



    // create the sphere



    sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
    sphereMaterial = new THREE.MeshLambertMaterial({
        color: 0x7777FF,
        wireframe: false
    });


    sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(20, 4, 2);

    // add the objects
    scene.add(cube);
    scene.add(sphere);
    scene.add(plane);

    camera.position.set(-30, 40, 30);
    camera.lookAt(scene.position);

    spotLight = new THREE.SpotLight(0xFFFFFF);

    spotLight.position.set(-40, 40, -15);
    spotLight.castShadow = true;
    spotLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
    spotLight.shadow.camera.far = 130;
    spotLight.shadow.camera.near = 40;

    scene.add(spotLight);

    ambienLight = new THREE.AmbientLight(0x353535);
    scene.add(ambienLight);

    document.body.appendChild(renderer.domElement);

    renderer.render(scene, camera);



}

