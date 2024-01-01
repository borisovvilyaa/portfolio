<template>
  <div>
    <Header />
    
    <main class="main">
      <Main />
    </main>
  </div>
</template>

<style>
  .main {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<script>
import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';

export default {
  components: {
    Header,
    Main
  }
};
</script>
