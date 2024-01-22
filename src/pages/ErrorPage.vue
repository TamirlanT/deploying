<template>
    <div class="error__page center">
        <div class="error">
            <p class="error_number">404</p>
            <p class="error__text">We are sorry, but the page
                you requested was not found</p>
            <router-link @click="scroll()" to="/"><button class="error__button">Back to Home</button></router-link>

        </div>
        <div>
            <img class="error__img" src="../assets/errorPage/error_img.jpg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'ErrorPage',
    methods: {
        scroll() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
};
</script>

<style scoped>
@import url('../scc/errorPage.css');
</style>