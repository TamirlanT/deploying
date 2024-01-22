<template>
    <div>
        <div>
            <div class="header center">
                <router-link @click="scroll()" to="/">
                    <div class="header__logo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                            <path
                                d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
                                fill="#CDA274" />
                        </svg>
                        <p class="header__text">Interno</p>
                    </div>
                </router-link>
                <nav @click="scroll()" class="header__links">
                    <router-link class="header__link" to="/">Home</router-link>
                    <router-link class="header__link" to="/projects">Projects</router-link>
                    <router-link class="header__link" to="/blog">Blog</router-link>
                    <router-link class="header__link" to="/details">Details</router-link>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderPage',
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
@import url('../scc/headerFooter.css');
</style>