<script>
  export let name;
</script>

<h1>
  Hello
  <span>{name}</span>
  !
</h1>

<style>
  h1 {
    color: rgb(0, 60, 128);

    & span {
      color: red;
    }
  }
</style>
