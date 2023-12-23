<template>
  <div class="preloader"  id="preloader">
    <div id="loader"></div>

   </div>
</template>

<script>
export default {
  name: 'Preloader',
  methods: {
    hidePreloader() {
      // Добавляем класс, который запускает анимацию
      document.querySelector('.preloader').classList.add('loading-done');
    }
  },
  mounted() {
    // Пример: Скрываем прелоадер через 2 секунды после монтажа компонента
    setTimeout(() => {
      this.hidePreloader();
    }, 500);
  }
}
</script>

<style scoped>
.preloader {

  background: #f8f9fa;

  z-index: 1000;
  opacity: 1;
  transition: opacity 1s; /* Добавленный переход для свойства opacity */
}

/* Добавленные стили для анимации */
.preloader.loading-done {
  opacity: 0;
}
#preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
#loader {
  display: block;
  position: relative;
  left: 50%;
  top: 50%;
  width: 150px;
  height: 150px;
  margin: -75px 0 0 -75px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #9370DB;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}
#loader:before {
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #BA55D3;
  -webkit-animation: spin 3s linear infinite;
  animation: spin 3s linear infinite;
}
#loader:after {
  content: "";
  position: absolute;
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #FF00FF;
  -webkit-animation: spin 1.5s linear infinite;
  animation: spin 1.5s linear infinite;
}
@-webkit-keyframes spin {
  0%   {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
  }
  100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
  }
}
@keyframes spin {
  0%   {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
  }
  100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
  }
}

</style>
