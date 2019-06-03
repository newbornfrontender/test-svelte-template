<script>
  import { onDestroy } from 'svelte';

  import { count } from '../../store';

  import Increase from './Increment.svelte';
  import Decrease from './Decrement.svelte';
  import Reset from './Resetter.svelte';

  let counter;

  const unsubscribe = count.subscribe((value) => (counter = value));

  onDestroy(unsubscribe);
</script>

<style>
  .grid {
    display: grid;
    grid-template: auto / repeat(3, 100px);
  }

  .decrement {
    justify-self: center;
  }

  .counter {
    grid-area: 1 / 2;
    margin: 0;
    justify-self: center;
  }

  .increment {
    grid-area: 1 / 3;
    justify-self: center;
  }

  .resetter {
    grid-area: 2 / 1 / 3 / 4;
    justify-self: center;
  }
</style>

<div class="grid">
  <div class="decrement">
    <Decrease />
  </div>

  <p class="counter">{counter}</p>

  <div class="increment">
    <Increase />
  </div>

  <div class="resetter">
    <Reset />
  </div>
</div>
