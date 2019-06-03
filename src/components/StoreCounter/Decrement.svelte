<script>
  import { count } from '../../store';

  function decrease() {
    count.update((n) => n - 1);
  }
</script>

<button on:click={decrease}>Decrease</button>
