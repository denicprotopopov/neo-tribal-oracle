<script>
// @ts-nocheck

    import { onMount } from "svelte";
    import {
      Canvas,
      Scene,
      PerspectiveCamera,
      DirectionalLight,
      AmbientLight,
      BoxBufferGeometry,
      Mesh,
      MeshStandardMaterial,
      WebGLRenderer,
    } from "https://unpkg.com/svelthree@latest/dist/svelthree.mjs";
  
    let cubeGeometry = new BoxBufferGeometry(1, 1, 1);
    let cubeMaterial = new MeshStandardMaterial();
    let cube;
    let cubeMesh;
    
  
    onMount(() => {
      cubeMesh = cube.getMesh();
      rotateCube();
  
      return () => {
        console.log("MyRotatingCube > onDestroy!");
        onDestroy();
      };
    });
  
    let rAF = 0;
    let doRotate = false;
  
    function rotateCube() {
      startRotating();
    }
  
    function startRotating() {
      doRotate = true;
      rAF = requestAnimationFrame(rotate);
    }
  
    function rotate() {
      if (doRotate) {
        cubeMesh.rotation.x += 0.01;
        cubeMesh.rotation.y += 0.01;
        cubeMesh.rotation.z += 0.01;
        rAF = requestAnimationFrame(rotate);
      }
    }
  
    function onDestroy() {
      console.log("MyRotatingCube > 'onDestroy' cleanup function triggered!");
      doRotate = false;
      cancelAnimationFrame(rAF);
    }
  </script>
  
  <Canvas let:sti w={200} h={200}>
  
    <Scene {sti} let:scene id="scene1" props={{ background: 'black' }}>
  
      <PerspectiveCamera {scene} id="cam1" pos={[0, 0, 3]} lookAt={[0, 0, 0]} />
      <AmbientLight {scene} intensity={1.25} />
      <DirectionalLight {scene} pos={[3, 3, 3]} />
  
      <Mesh
        {scene}
        bind:this={cube}
        geometry={cubeGeometry}
        material={cubeMaterial}
        mat={{ roughness: 0.5, metalness: 0.5, color: 'white' }}
        pos={[0, 0, 0]}
        scale={[1, 1, 1]} />
  
    </Scene>
  
    <WebGLRenderer
      {sti}
      sceneId="scene1"
      camId="cam1"
      config={{ antialias: true, alpha: true }} />
  
  </Canvas>
  