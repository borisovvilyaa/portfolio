<template>
  <!-- <div class="header" :style="cssProps">
    <div class="content">
      <div class="name">
        <h2>Illia Borusov</h2>
        <div class="name_spec">
          Software Developer from Kharkiv
          <img src="@/assets/image/ua_flag.gif" alt="" />
        </div>
      </div>
    </div>
    <div class="scroll">
      <div class="circle">
        <div class="arrow"></div>
      </div>
    </div>
  </div> -->
  <div class="container-sm main">
    <div class="d-flex justify-content-center align-items-center gap-2">
      <div class="col text-main">
        <h3>ABOUT ME</h3>
        <p class="mt-3">
          Hi, I'm a software programmer with a passion for cryptography, web development, and
          hardware work. My passion is creating secure and interactive solutions for the digital
          world.
        </p>
        <div class="contact">
          <ul>
            <li>
              <a href="https://github.com/borisovvilyaa" target="_blank"
                ><i class="bi bi-github"></i
              ></a>
            </li>
            <li>
              <a href="mailto:borisovvilyaa@gmail.com" target="_blank"
                ><i class="bi bi-envelope"></i
              ></a>
            </li>
            <li>
              <a href="https://t.me/illiaborusov" target="_blank"><i class="bi bi-telegram"></i></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/illiaborusov/" target="_blank"
                ><i class="bi bi-linkedin"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col me-block">
        <img src="@/assets/image/me.jpg" class="me" alt="me" />
      </div>
    </div>
  </div>
</template>

<script>
import FirstBlockImage from '@/assets/image/First_block.png' // Import the image using import

export default {
  name: 'AppMain', // Изменили имя компонента
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${FirstBlockImage})` // Use the imported image
      }
    }
  }
}
</script>

<style>
@import url('bootstrap-icons');
.container-sm {
  max-width: 1077px !important;
}

@media (max-width: 768px) {
  /* Изменяем стиль для мобильных устройств с шириной экрана до 768px */
  .d-flex {
    flex-direction: column;
    align-items: center;
  }

  .col.text-main {
    text-align: center; /* Центрируем текст по центру */
    margin-bottom: 20px; /* Добавляем отступ снизу */
  }
  .me-block {
    display: flex;
    justify-content: center;
  }
  .col img.me {
    padding: 0;
    width: 50%;
    margin-left: 0;

    height: 50%;
    margin-top: 20px; /* Добавляем отступ сверху для изображения */
  }
}
</style>
