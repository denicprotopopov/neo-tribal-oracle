<div class="tarot">
  <div class="card-container">
	  <slot></slot>
  </div>
</div>

<style>
	.tarot {
    flex-grow: 0;
	  flex-shrink: 0;
    border-radius: 25px;
    background-color: rgb(0, 0, 0);
    width: 300px;
    height: 450px;
    box-shadow: 0 10px 50px white;
    will-change: filter;
    transition: filter 300ms, transform 250ms;
	}
  
  .tarot:hover {
    filter: drop-shadow(0 10px 50px rgb(15, 15, 103));
    transform: translateY(-40px);
  }

  .card-container {
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    height: 100%;
  }
</style>