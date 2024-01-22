<template>
    <div class="tags center">
        <div class="banner">
            <img src="../assets/ProjectsPage/Banner.jpg" alt="banner">
            <div class="banner__box ">
                <h2 class="banner__title">Our Project</h2>
                <nav class="banner__links">
                    <router-link class="header__link" to="/">Home</router-link>/
                    <router-link class="header__link" to="/projects">Project</router-link>
                </nav>
            </div>
        </div>
        <div class="changeButtons center" ref="head">
            <button class="changeButton" :class="{ isActive: currentTab === nameButton }"
                @click="currentTab = nameButton, changeTag()" v-for="    nameButton     in       nameButtons      "
                :key="nameButton.id">
                {{ nameButton }}
            </button>
        </div>
        <div class="projects center">
            <div class="product" v-for="  component   in   paginatedData  " :key="component.id">
                <div class="product__image">
                    <div>
                        <img :src="component.image" alt="1" class="component__img">
                    </div>
                    <div class="button__box">
                        <button class="like__button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                                <g filter="url(#filter0_d_993_156)">
                                    <path @click="component.isActive = !component.isActive"
                                        :class="{ red: component.isActive }"
                                        d="M16.0992 1.80951C16.7004 -0.0279021 19.2996 -0.0279021 19.9008 1.80951L21.7983 7.60879C22.0673 8.43084 22.8342 8.98685 23.6992 8.98685H29.8097C31.7506 8.98685 32.5539 11.4732 30.98 12.6088L26.0604 16.1581C25.3546 16.6674 25.0591 17.5748 25.3298 18.402L27.2146 24.1623C27.8166 26.0025 25.7137 27.539 24.1435 26.4062L19.1702 22.818C18.4715 22.3139 17.5285 22.3139 16.8298 22.818L11.8565 26.4062C10.2863 27.539 8.18335 26.0025 8.78545 24.1623L10.6702 18.402C10.9409 17.5748 10.6454 16.6674 9.93955 16.1581L5.02004 12.6088C3.44611 11.4732 4.24942 8.98685 6.19025 8.98685H12.3008C13.1658 8.98685 13.9327 8.43084 14.2017 7.60879L16.0992 1.80951Z"
                                        fill="white" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_993_156" x="0.186424" y="0.431396" width="35.6271"
                                        height="34.3619" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix"
                                            result="effect1_dropShadow_993_156" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_993_156"
                                            result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="product__footer">
                    <div class="product__desc">
                        <h2 class="component__tittle"> {{ component.tittle }}</h2>
                        <p class="component__text">{{ component.text }}</p>
                    </div>
                    <div class="product__button">
                        <router-link @click="scroll()" to="/404" class="product__button"><img
                                src="../assets/ProjectsPage/buttonRight.svg" alt="s"></router-link>
                    </div>
                </div>
            </div>
        </div>
        <div @click="openSlide()" class="pagination center">
            <button class="pagination__button" :disabled="currentPage === 1" @click="prevPage">
                &lsaquo; </button>
            <button class="pagination__button" v-for="  page   in   pages  " :key="page"
                :class="{ active: currentPage === page }" @click="changePage(page)">{{ page }}</button>
            <button class="pagination__button" :disabled="currentPage === pageCount" @click="nextPage">&rsaquo;</button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ProjectsPage',
    components: {
    },
    data() {
        return {
            nameButtons: ['Bathroom', 'Bed-room', 'Kitchen', 'Living-Area'],
            currentTab: 'Bathroom',
            currentPage: 1,
            itemsPerPage: 4,
            data: {
                'Bathroom': [
                    {
                        image: require("../assets/ProjectsPage/product1.jpg"),
                        title: 'Minimal Bathroom',
                        text: 'Decor / Arc',
                        id: 1,
                        isActive: false,
                    }, {
                        image: require("../assets/ProjectsPage/product2.jpg"),
                        title: 'Minimal Bathroom',
                        text: 'Decor / Arc',
                        id: 2,
                        isActive: true,
                    }, {
                        image: require("../assets/ProjectsPage/product3.jpg"),
                        title: 'Minimal Bathroom',
                        text: 'Decor / Arc',
                        id: 3,
                        isActive: false,
                    }, {
                        image: require("../assets/ProjectsPage/product4.jpg"),
                        title: 'Minimal Bathroom',
                        text: 'Decor / Arc',
                        id: 4,
                        isActive: false
                    }, {
                        image: require("../assets/ProjectsPage/product4.jpg"),
                        title: 'Minimal Bathroom',
                        text: 'Decor / Arc',
                        id: 5,
                        isActive: false,
                    }, {
                        image: require("../assets/ProjectsPage/product3.jpg"),
                        title: 'Minimal Bathroom',
                        text: 'Decor / Arc',
                        id: 6,
                        isActive: true,
                    }, {
                        image: require("../assets/ProjectsPage/product2.jpg"),
                        title: 'Minimal Bathroom',
                        text: 'Decor / Arc',
                        id: 7,
                        isActive: false,
                    }, {
                        image: require("../assets/ProjectsPage/product1.jpg"),
                        title: 'Minimal Bathroom',
                        text: 'Decor / Arc',
                        id: 8,
                        isActive: false
                    }, {
                        image: require("../assets/ProjectsPage/product1.jpg"),
                        title: 'Minimal Bathroom',
                        text: 'Decor / Arc',
                        id: 9,
                        isActive: false,
                    }, {
                        image: require("../assets/ProjectsPage/product3.jpg"),
                        title: 'Minimal Bathroom',
                        text: 'Decor / Arc',
                        id: 10,
                        isActive: false,
                    }, {
                        image: require("../assets/ProjectsPage/product2.jpg"),
                        title: 'Minimal Bathroom',
                        text: 'Decor / Arc',
                        id: 1,
                        isActive: false,
                    }

                ],
                'Bed-room': [{
                    image: require("../assets/ProjectsPage/product4.jpg"),
                    title: 'Minimal Bathroom',
                    text: 'Decor / Arc',
                    id: 1,
                    isActive: false,
                }, {
                    image: require("../assets/ProjectsPage/product3.jpg"),
                    title: 'Minimal Bathroom',
                    text: 'Decor / Arc',
                    id: 2,
                    isActive: true,
                }, {
                    image: require("../assets/ProjectsPage/product2.jpg"),
                    title: 'Minimal Bathroom',
                    text: 'Decor / Arc',
                    id: 3,
                    isActive: false,
                }, {
                    image: require("../assets/ProjectsPage/product4.jpg"),
                    title: 'Minimal Bathroom',
                    text: 'Decor / Arc',
                    id: 4,
                    isActive: false
                }],
                'Kitchen': [{
                    image: require("../assets/ProjectsPage/product4.jpg"),
                    title: 'Minimal Bathroom',
                    text: 'Decor / Arc',
                    id: 1,
                    isActive: false,
                }, {
                    image: require("../assets/ProjectsPage/product3.jpg"),
                    title: 'Minimal Bathroom',
                    text: 'Decor / Arc',
                    id: 2,
                    isActive: true,
                }, {
                    image: require("../assets/ProjectsPage/product2.jpg"),
                    title: 'Minimal Bathroom',
                    text: 'Decor / Arc',
                    id: 3,
                    isActive: false,
                }, {
                    image: require("../assets/ProjectsPage/product4.jpg"),
                    title: 'Minimal Bathroom',
                    text: 'Decor / Arc',
                    id: 4,
                    isActive: false
                }],
                'Living-Area': [{
                    image: require("../assets/ProjectsPage/product4.jpg"),
                    title: 'Minimal Bathroom',
                    text: 'Decor / Arc',
                    id: 1,
                    isActive: false,
                }, {
                    image: require("../assets/ProjectsPage/product3.jpg"),
                    title: 'Minimal Bathroom',
                    text: 'Decor / Arc',
                    id: 2,
                    isActive: true,
                }, {
                    image: require("../assets/ProjectsPage/product2.jpg"),
                    title: 'Minimal Bathroom',
                    text: 'Decor / Arc',
                    id: 3,
                    isActive: false,
                }, {
                    image: require("../assets/ProjectsPage/product4.jpg"),
                    title: 'Minimal Bathroom',
                    text: 'Decor / Arc',
                    id: 4,
                    isActive: false
                }],
            }
        };
    },
    computed: {
        changeTabs() {
            return `${this.currentTab}`;
        },
        pageCount() {
            return Math.ceil(this.data[this.currentTab].length / this.itemsPerPage);
        },
        pages() {
            const pagesArray = [];
            for (let i = 1; i <= this.pageCount; i++) {
                pagesArray.push(i);
            }
            return pagesArray;
        },
        paginatedData() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            return this.data[this.currentTab].slice(startIndex, startIndex + this.itemsPerPage);
        },
    },
    methods: {
        // scroll - Для прокрутки к началу странцы
        scroll() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        },
        // chanagePage для смены страницы
        changePage(pageNumber) {
            this.currentPage = pageNumber;

        },
        // prevPage листинг на предыдущую страницу
        prevPage() {
            this.currentPage--;
        },
        // nextPage листинг на следующую страницу 
        nextPage() {
            this.currentPage++;
        },
        // changeTag для смены тэга
        changeTag() {
            this.currentPage = 1;
        },
        // openSlide для прокрутки к началу тегов
        openSlide() {
            // Получение ссылки на элемент
            let slide = this.$refs[`head`]
            // Определение расстояния от начала страницы до нужного элемента
            let top = window.scrollY + slide.getBoundingClientRect().y;
            // Перемотка
            window.scrollTo({
                top: top,
                behavior: 'smooth'
            })

        }
    }
}
</script>

<style scoped>
@import url('../scc/projectsPage.css');
</style>