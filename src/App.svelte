<script>
  import { count } from './store';

  import SampleWrapper from './components/SampleWrapper.svelte';
  import Counter from './components/Counter.svelte';
  import StoreCounter from './components/StoreCounter/StoreCounter.svelte';
</script>

<style>
  .title {
    text-align: center;
    margin: 30px 0;
  }
</style>

<section class="container">
  <h1 class="title">👉 Samples list 👈</h1>

  <div class="wrapper">
    <SampleWrapper title="Counter">
      <Counter />
    </SampleWrapper>

    <SampleWrapper title="Store counter ({$count})">
      <StoreCounter />
    </SampleWrapper>
  </div>
</section>
