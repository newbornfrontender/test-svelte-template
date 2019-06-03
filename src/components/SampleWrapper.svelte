<script>
  export let title;
</script>

<style>
  .wrapper {
    padding: 16px;
    border: 2px solid tomato;
    border-radius: 6px;
    background: cornsilk;
  }

  .title {
    padding: 0;
    border: 2px solid tomato;
    border-radius: 12px;
    background: blanchedalmond;

    & .text {
      margin: 0;
      padding: 5px 14px 10px;
      color: sienna;
    }
  }

  .content {
    padding: 10px;
    border: 2px solid cornflowerblue;
    border-radius: 6px;
    background-color: white;
  }

  .break-line {
    width: 100%;
    height: 4px;
    margin: 20px 0;
    border: 0;
    border-radius: 2px;
    background-color: steelblue;
  }
</style>

<fieldset class="wrapper">
  <legend class="title">
    <h2 class="text">👋 {title}</h2>
  </legend>

  <div class="content">
    <slot>No content 😿</slot>
  </div>
</fieldset>

<hr class="break-line" />
