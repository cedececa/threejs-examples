const scene = new THREE.Scene(); 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 500 ); 
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

const   renderer = new THREE.WebGLRenderer(); 
        renderer.setSize(window.innerWidth, window.innerHeight); 

document.body.appendChild(renderer.domElement); 

// Cube
const geometry = new THREE.BoxGeometry(); 
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); 
const cube = new THREE.Mesh(geometry, material);             
scene.add(cube); 

// line
const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );
const lineGeometry = new THREE.BufferGeometry().setFromPoints( points );
const lineMaterial = new THREE.LineBasicMaterial( { color: 0x0000ff } );
const line = new THREE.Line( lineGeometry, lineMaterial );
scene.add( line );

// circle
const circleGeometry = new THREE.CircleGeometry(3, 32);
const circle = new THREE.Mesh(circleGeometry, material); 
scene.add(circle);

// light

const spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( 100, 1000, 100 );

spotLight.castShadow = true;

spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;

spotLight.shadow.camera.near = 500;
spotLight.shadow.camera.far = 4000;
spotLight.shadow.camera.fov = 30;

scene.add( spotLight );

camera.position.z = 20; 

const animate = function () {                 
        requestAnimationFrame(animate); 
        cube.rotation.x += 0.001; 
        cube.rotation.y += 0.001; 

        line.rotation.x += 0.001; 
        line.rotation.y += 0.001; 
        renderer.render(scene, camera); 
}; 

animate();