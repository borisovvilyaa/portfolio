<template>
<div class="header" :style="cssProps">
        <div class="content">
            <div class="name">
                <h2>Illia Borusov</h2>
                <div class="name_spec">
                    Software Developer from Kharkiv
                    <img src="@/assets/image/ua_flag.gif" alt="">
                </div>
            </div>
        </div>
        <div class="scroll">
            <div class="circle">
                <div class="arrow"></div>
            </div>
        </div>
    </div>
</template>


<script>
    import 'bootstrap/dist/css/bootstrap.css';
    import 'bootstrap/dist/js/bootstrap.bundle.min';
    import FirstBlockImage from '@/assets/image/First_block.png'; // Import the image using import

    export default {
        name: 'AppHeader', // Изменили имя компонента
        data() {
        return {
            cssProps: {
                backgroundImage: `url(${FirstBlockImage})` // Use the imported image

            }
        }
        }

    }
</script>

