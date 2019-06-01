<script>
  export let name;
</script>

<h1 class="title">
  Hello
  <span class="text">{name}</span>
  !
</h1>

<style type="text/postcss" lang="postcss">
  .title {
    color: rgb(0, 60, 128);

    & .text {
      color: red;
    }
  }
</style>
