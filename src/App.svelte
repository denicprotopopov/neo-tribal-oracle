<script>
  import Card from './lib/Card.svelte';
  import Cube from './lib/Cube.svelte';
  import Knot from './lib/Knot.svelte';
  import VanillaThree from './lib/VanillaThree.svelte';

  let rotatingCube
  let rotatingKnot;
</script>


<main class="container">
  
    <Card>
      <Cube bind:this={rotatingCube} />
    </Card>

    <Card>
      <Knot bind:this={rotatingKnot} />
    </Card>

    <Card>
      <VanillaThree />
    </Card>
  
</main>


<style>
.container {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
  height: 90vh;
}
</style>
