<script>
  export let count = 0;

  function increment() {
    count++;
  }

  function decrement() {
    count--;
  }
</script>

<style>
  .wrapper {
    display: flex;
  }

  .count {
    margin: 0 15px;
  }
</style>

<div class="wrapper">
  <button class="btn" on:click={decrement}>Decrease 👇</button>

  <p class="count">{count}</p>

  <button class="btn" on:click={increment}>Increase ☝️</button>
</div>

<p>{count % 2 === 0 ? 'Even 🕺' : 'Odd 💃'}</p>
