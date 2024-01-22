<template>
    <div>
        <div class="tags center">
            <div class="banner">
                <img src="../assets/BlogPage/banner.jpg" alt="banner">
                <div class="banner__box ">
                    <h2 class="banner__title">Article News</h2>
                    <nav @click="scroll()" class="banner__links">
                        <router-link class="header__link" to="/">Home</router-link>/
                        <router-link class="header__link" to="/blog">Blog</router-link>
                    </nav>
                </div>
            </div>
        </div>
        <div class="blog center">
            <h2 class="blog__title">
                Latest Post
            </h2>
            <div class="blog__box">
                <img class="blog__img" src="../assets/BlogPage/blog__img.png" alt="blog image">
                <div class="blog__description">
                    <h2 class="blog__subtitle">Low Cost Latest Invented Interior Designing Ideas</h2>
                    <p class="blog__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim
                        maximus.posuere in.Contrary to popular belief.
                        <br><br>Lorem Ipsum is not simply random text. It has roots in a piece of classica.
                    </p>
                    <div class="blog__dating">
                        <p class="blog__date">26 December,2022 </p>
                        <router-link @click="scroll()" to="/404">
                            <img src="../assets/BlogPage/project_icon.svg" alt="alt">
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div id="app" class="content center">
            <h2 class="content__title">Articles & News</h2>
            <div class="content__products">
                <div v-for="item in   paginatedData  " :key="item.id" class="content__cart">
                    <div class="content_img">
                        <img class="content__image" :src="item.source" :alt="item.alter">
                        <p class="img__text">{{ item.imageText }}</p>
                    </div>
                    <h3 class="cart__title">{{ item.cartTitle }}</h3>
                    <div class="cart__box">
                        <p class="cart__texting">{{ item.cartText }} </p>
                        <router-link to="/" class="cart__link" @click="scroll()">
                            <img src="../assets/BlogPage/project_icon.svg" alt="icon">
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="pagination center">
                <button class="pagination__button" :disabled="currentPage === 1" @click="prevPage">
                    &lsaquo; </button>
                <button class="pagination__button" v-for="  page   in   pages  " :key="page"
                    :class="{ active: currentPage === page }" @click="changePage(page)">{{
                        page }}</button>
                <button class="pagination__button" :disabled="currentPage === pageCount" @click="nextPage">&rsaquo;</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogPage',

    data() {
        return {
            currentPage: 1,
            itemsPerPage: 6,
            data: [
                {
                    source: require('../assets/BlogPage/project_1.png'),
                    alter: 'Kitchen Design',
                    imageText: 'Kitchen Design',
                    cartTitle: 'Let’s Get Solution For Building Construction Work',
                    cartText: '26 December,2022'
                }, {
                    source: require('../assets/BlogPage/project_2.png'),
                    alter: 'Living Design',
                    imageText: 'Living Design',
                    cartTitle: 'Low Cost Latest Invented Interior Designing Ideas.',
                    cartText: '22 December,2022 '
                }, {
                    source: require('../assets/BlogPage/project_3.png'),
                    alter: 'Interior Design',
                    imageText: 'Interior Design',
                    cartTitle: 'Best For Any Office & Business Interior Solution',
                    cartText: '25 December,2022 '
                }, {
                    source: require('../assets/BlogPage/project_4.png'),
                    alter: 'Kitchen Design',
                    imageText: 'Kitchen Design',
                    cartTitle: 'Let’s Get Solution For Building Construction Work',
                    cartText: '26 December,2022'
                }, {
                    source: require('../assets/BlogPage/project_5.png'),
                    alter: 'Living Design',
                    imageText: 'Living Design',
                    cartTitle: 'Low Cost Latest Invented Interior Designing Ideas.',
                    cartText: '22 December,2022'
                }, {
                    source: require('../assets/BlogPage/project_6.png'),
                    alter: 'Interior Design',
                    imageText: 'Interior Design',
                    cartTitle: 'Best For Any Office & Business Interior Solution',
                    cartText: '25 December,2022'
                }, {
                    source: require('../assets/BlogPage/project_4.png'),
                    alter: 'Kitchen Design',
                    imageText: 'Kitchen Design',
                    cartTitle: 'Let’s Get Solution For Building Construction Work',
                    cartText: '26 December,2022'
                }, {
                    source: require('../assets/BlogPage/project_3.png'),
                    alter: 'Living Design',
                    imageText: 'Living Design',
                    cartTitle: 'Low Cost Latest Invented Interior Designing Ideas.',
                    cartText: '22 December,2022 '
                }, {
                    source: require('../assets/BlogPage/project_2.png'),
                    alter: 'Interior Design',
                    imageText: 'Interior Design',
                    cartTitle: 'Best For Any Office & Business Interior Solution',
                    cartText: '25 December,2022 '
                }, {
                    source: require('../assets/BlogPage/project_1.png'),
                    alter: 'Kitchen Design',
                    imageText: 'Kitchen Design',
                    cartTitle: 'Let’s Get Solution For Building Construction Work',
                    cartText: '26 December,2022'
                }, {
                    source: require('../assets/BlogPage/project_6.png'),
                    alter: 'Living Design',
                    imageText: 'Living Design',
                    cartTitle: 'Low Cost Latest Invented Interior Designing Ideas.',
                    cartText: '22 December,2022'
                }, {
                    source: require('../assets/BlogPage/project_5.png'),
                    alter: 'Interior Design',
                    imageText: 'Interior Design',
                    cartTitle: 'Best For Any Office & Business Interior Solution',
                    cartText: '25 December,2022'
                }, {
                    source: require('../assets/BlogPage/project_6.png'),
                    alter: 'Kitchen Design',
                    imageText: 'Kitchen Design',
                    cartTitle: 'Let’s Get Solution For Building Construction Work',
                    cartText: '26 December,2022'
                }, {
                    source: require('../assets/BlogPage/project_5.png'),
                    alter: 'Living Design',
                    imageText: 'Living Design',
                    cartTitle: 'Low Cost Latest Invented Interior Designing Ideas.',
                    cartText: '22 December,2022 '
                }, {
                    source: require('../assets/BlogPage/project_4.png'),
                    alter: 'Interior Design',
                    imageText: 'Interior Design',
                    cartTitle: 'Best For Any Office & Business Interior Solution',
                    cartText: '25 December,2022 '
                }, {
                    source: require('../assets/BlogPage/project_3.png'),
                    alter: 'Kitchen Design',
                    imageText: 'Kitchen Design',
                    cartTitle: 'Let’s Get Solution For Building Construction Work',
                    cartText: '26 December,2022'
                }, {
                    source: require('../assets/BlogPage/project_2.png'),
                    alter: 'Living Design',
                    imageText: 'Living Design',
                    cartTitle: 'Low Cost Latest Invented Interior Designing Ideas.',
                    cartText: '22 December,2022'
                }, {
                    source: require('../assets/BlogPage/project_1.png'),
                    alter: 'Interior Design',
                    imageText: 'Interior Design',
                    cartTitle: 'Best For Any Office & Business Interior Solution',
                    cartText: '25 December,2022'
                },
            ]
        }
    },
    computed: {
        pageCount() {
            return Math.ceil(this.data.length / this.itemsPerPage);
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
            return this.data.slice(startIndex, startIndex + this.itemsPerPage);
        },
    },
    methods: {
        scroll() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
        changePage(pageNumber) {
            this.currentPage = pageNumber;
        },
        prevPage() {
            this.currentPage--;
        },
        nextPage() {
            this.currentPage++;
        },
        changeTag() {
            this.currentPage = 1;
        }
    }
};
</script>

<style lang="css" scoped>
@import url('../scc/blogPage.css');
</style>