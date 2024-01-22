<template>
    <div class="banner center">
        <div class="banner__intro">
            <div class="banner__content">
                <h1 class="banner__title">Let Your Home
                    Be Unique</h1>
                <p class="banner__text">There are many variations of the passages of
                    lorem Ipsum fromavailable, majority.</p>
                <nav>
                    <router-link @click="scroll()" to="/projectDetails">
                        <p class="banner__button">Get started <img src="../assets/mainPage/button_img.svg" alt="alter"></p>
                    </router-link>
                </nav>
            </div>

        </div>
    </div>
    <div class="project center">
        <div class="project__heading">
            <h3 class="heading__title">Follow Our Projects</h3>
            <p class="heading__text">It is a long established fact that a reader will be distracted by the of readable
                content of page lookings at its layouts points.</p>
        </div>
        <div class="project__models">
            <div class="project__model">
                <img src="../assets/mainPage/project_1.png" alt="project_1">
                <div class="project__icon">
                    <p class="project__title">Modern Kitchan</p>
                    <p class="project__discription">Decor / Artchitecture</p>
                    <router-link @click="scroll()" to="/404">
                        <svg class="svg__icon" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70"
                            fill="none">
                            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </router-link>
                </div>
            </div>

            <div class="project__model">
                <img style="border-top-left-radius: 15%;" src="../assets/mainPage/project_2.png" alt="project_2">
                <div class="project__icon">
                    <p class="project__title">Modern Kitchan</p>
                    <p class="project__discription">Decor / Artchitecture</p>
                    <router-link @click="scroll()" to="/404">
                        <svg class="svg__icon" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70"
                            fill="none">
                            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </router-link>
                </div>
            </div>
            <div class="project__model">
                <img style="border-bottom-right-radius: 15%;" src="../assets/mainPage/project_3.png" alt="project_3">
                <div class="project__icon">
                    <p class="project__title">Modern Kitchan</p>
                    <p class="project__discription">Decor / Artchitecture</p>
                    <router-link @click="scroll()" to="/404">
                        <svg class="svg__icon" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70"
                            fill="none">
                            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </router-link>
                </div>
            </div>

            <div class="project__model">
                <img style="border-bottom-left-radius: 15%;" src="../assets/mainPage/project_4.png" alt="project_4">
                <div class="project__icon">
                    <p class="project__title">Modern Kitchan</p>
                    <p class="project__discription">Decor / Artchitecture</p>
                    <router-link @click="scroll()" to="/404">
                        <svg class="svg__icon" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70"
                            fill="none">
                            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <div class="counter center">
        <div class="counter__years">
            <p class="counter__numbers">12</p>
            <p class="counter__text">Years Of Experiance</p>
        </div>
        <div class="counter__line"><img src="../assets/mainPage/Line.png" alt=""></div>
        <div class="counter__projects">
            <p class="counter__numbers">85</p>
            <p class="counter__text">Success Project</p>
        </div>
        <div class="counter__line"><img src="../assets/mainPage/Line.png" alt=""></div>
        <div class="counter__active">
            <p class="counter__numbers">15</p>
            <p class="counter__text">Active Project</p>
        </div>
        <div class="counter__line"><img src="../assets/mainPage/Line.png" alt=""></div>
        <div class="counter__customers">
            <p class="counter__numbers">95</p>
            <p class="counter__text">Happy Customers</p>
        </div>
    </div>
    <div class="blog center">
        <div class="blog__heading">
            <h3 class="blog__title">Articles & News</h3>
            <p class="blog__textinfo">It is a long established fact that a reader will be distracted by the of readable
                content of a page when lookings at its layouts the points of using.</p>
        </div>
        <div class="blog__content">
            <div class="blog__cart">
                <div class="blog_img">
                    <img style="width: 340px; border-radius: 15% 15% 0 0;" src="../assets/mainPage/kitchen_design.png"
                        alt="Kitchen Design">
                    <p class="img__text">Kitchen Design</p>
                </div>
                <h3 class="cart__title">Let’s Get Solution For Building Construction Work</h3>
                <p class="cart__text">26 December,2022 </p>
            </div>
            <div class="blog__cart">
                <div class="blog_img">
                    <img style="width: 340px; border-radius: 15% 15% 0 0;" src="../assets/mainPage/Living__design.png"
                        alt="Living__design">
                    <p class="img__text">Living Design</p>
                </div>
                <h3 class="cart__title">Let’s Get Solution For Building Construction Work</h3>
                <p class="cart__text">26 December,2022 </p>
            </div>
            <div class="blog__cart">
                <div class="blog_img">
                    <img style="width: 340px; border-radius: 15% 15% 0 0;" src="../assets/mainPage/Interior__design.png"
                        alt="Interior__design">
                    <p class="img__text">Interior Design</p>
                </div>
                <h3 class="cart__title">Let’s Get Solution For Building Construction Work</h3>
                <p class="cart__text">26 December,2022 </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
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

<style lang="css" scoped>
@import url('../scc/homePage.css');
</style>