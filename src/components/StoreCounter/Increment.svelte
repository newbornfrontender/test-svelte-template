<script>
  import { count } from '../../store';

  function increase() {
    count.update((n) => n + 1);
  }
</script>

<button on:click={increase}>Increase</button>
