<template>
  <div class="bg-grad">
    <div class="container">
      <div class="title">
        <div class="text-main text-center">
          <h3 style="color: #fff; margin-bottom: 30px;">SKILL'S</h3>
        </div>
        <div class="row justify-content-center gap-4">
          <div class="col-6 col-md-4 col-lg-3">
            <div class="text-center">
              <img src="@/assets/image/skill/go.png" alt="" class="skill-img" title="Go" />
            </div>
          </div>
          <div class="col-6 col-md-4 col-lg-3">
            <div class="text-center">
              <img src="@/assets/image/skill/python.png" alt="" class="skill-img" title="Python" />
            </div>
          </div>
          <div class="col-6 col-md-4 col-lg-3">
            <div class="text-center">
              <img src="@/assets/image/skill/docker.png" alt="" class="skill-img" title="Docker" />
            </div>
          </div>
          <div class="col-6 col-md-4 col-lg-3">
            <div class="text-center">
              <img src="@/assets/image/skill/html.png" alt="" class="skill-img" title="HTML" />
            </div>
          </div>
          <div class="col-6 col-md-4 col-lg-3">
            <div class="text-center">
              <img src="@/assets/image/skill/vue.png" alt="" class="skill-img" title="Vue.js" />
            </div>
          </div>
          <div class="col-6 col-md-4 col-lg-3">
            <div class="text-center">
              <img src="@/assets/image/skill/ether.png" alt="" class="skill-img" title="Ethereum" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>


.skill-img {
  transition: transform 0.2s ease-in-out;
}

.skill-img:hover {
  transform: scale(1.01);
}
</style>

<script>
export default {
  name: 'MySkill',
  // ...
}
</script>
