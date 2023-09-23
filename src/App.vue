
<template>
  <header>

    <div class="wrapper">
      <Header/>
    </div>
  </header>

  <main>
    <Main/>
    <Skill/>
    <Project/>
    <Education/>
  </main>
</template>
<script>
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'
import Skill from '@/components/Skill.vue'
import Project from '@/components/Projects.vue'
import Education from '@/components/Education.vue'
export default {
  components: {
    Header,
    Main,
    Skill,
    Project,
    Education
  }
}

</script>