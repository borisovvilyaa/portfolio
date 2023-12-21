// eslint-disable-next-line vue/multi-word-component-names
<template>
  <header>
    <div class="wrapper">
      <Header />
    </div>
  </header>

  <main>
    <Main />
  </main>
</template>
<script>
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'
export default {
  components: {
    Header,
    Main
  }
}
</script>
