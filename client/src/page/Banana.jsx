import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js'; // Make sure to include the OBJLoader

const Banana = () => {
  const sceneRef = useRef();

  useEffect(() => {
    let renderer, scene, camera, banana;

    const init = () => {
      renderer = new THREE.WebGLRenderer({
        canvas: sceneRef.current,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 10000);
      camera.position.set(0, 0, 500);
      scene.add(camera);

      // Add a light in the scene
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(0, 0, 350);
      directionalLight.lookAt(new THREE.Vector3(0, 0, 0));
      scene.add(directionalLight);

      // Load the obj file
      loadOBJ();
    };

    const loadOBJ = () => {
      // Manager from ThreeJs to track a loader and its status
      const manager = new THREE.LoadingManager();
      // Loader for Obj from Three.js
      const loader = new OBJLoader(manager);

      // Launch loading of the obj file, addBananaInScene is the callback when it's ready
      loader.load(
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/banana.obj',
        addBananaInScene
      );
    };

    const addBananaInScene = (object) => {
      banana = object;
      // Move the banana in the scene
      banana.rotation.x = Math.PI / 2;
      banana.position.y = -200;
      banana.position.z = 50;
      // Go through all children of the loaded object and search for a Mesh
      object.traverse(function (child) {
        // This allows us to check if the children are an instance of the Mesh constructor
        if (child instanceof THREE.Mesh) {
          child.material.color = new THREE.Color(0x00ff00);
          // Sometimes there are some vertex normals missing in the .obj files, ThreeJs will compute them
          child.geometry.computeVertexNormals();
        }
      });
      // Add the 3D object to the scene
      scene.add(banana);
      render();
    };

    const render = () => {
      requestAnimationFrame(render);

      // Turn the banana
      banana.rotation.z += 0.01;

      renderer.render(scene, camera);
    };

    init();

    return () => {
      // Clean up Three.js and any other resources
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return <canvas id="scene" ref={sceneRef}></canvas>;
};

export default Banana;
