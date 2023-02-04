<script>
// @ts-nocheck

    import { onMount } from "svelte";
    import {
      Canvas,
      Scene,
      PerspectiveCamera,
      DirectionalLight,
      AmbientLight,
      Mesh,
      MeshStandardMaterial,
      WebGLRenderer,
      TorusKnotGeometry,
    } from "https://unpkg.com/svelthree@latest/dist/svelthree.mjs";
  
    let knotGeometry = new TorusKnotGeometry( 10, 3, 100, 16 );
    let knotMaterial = new MeshStandardMaterial();
    let knot;
    let knotMesh;
  
    onMount(() => {
      knotMesh = knot.getMesh();
      rotateKnot();
  
      return () => {
        onDestroy();
      };
    });
  
    let rAF = 0;
    let doRotate = false;
  
    function rotateKnot() {
      startRotating();
    }
  
    function startRotating() {
      doRotate = true;
      rAF = requestAnimationFrame(rotate);
    }
  
    function rotate() {
      if (doRotate) {
        knotMesh.rotation.x += 0.01;
        knotMesh.rotation.y += 0.01;
        knotMesh.rotation.z += 0.01;
        rAF = requestAnimationFrame(rotate);
      }
    }
  
    function onDestroy() {
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
        bind:this={knot}
        geometry={knotGeometry}
        material={knotMaterial}
        mat={{ roughness: 0.5, metalness: 0.5, color: 'white' }}
        pos={[0, 0, 0]}
        scale={[.05, .05, .05]} />
  
    </Scene>
  
    <WebGLRenderer
      {sti}
      sceneId="scene1"
      camId="cam1"
      config={{ antialias: true, alpha: true }} />
  
  </Canvas>
  