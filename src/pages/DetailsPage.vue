<template>
    <div>
        <div class="tagbanner">
            <img src="../assets/detailsPage/banner.jpg" alt="banner">
        </div>
        <div class="grid center">
            <div class="tagcontent center">
                <div class="component" v-for="component in components[currentTab]    " :key="component.id">

                    <div>
                        <h2 class="component__tittle">
                            {{ component.tittle }}
                        </h2>
                        <div class="component__image">
                            <img :src="component.image" alt="image" class="image">
                        </div>
                        <div class="component__info">
                            <p class="component__date">{{ component.date }}</p>
                            <nav @click="scroll()" class="tagcontent__links">
                                <router-link class="tagcontent__link" to="/404">Interior</router-link>
                                <router-link class="tagcontent__link" to="/">Home</router-link>
                                <router-link class="tagcontent__link" to="/404">Decore</router-link>
                            </nav>
                        </div>
                        <div class="component__description">
                            <p class="component__text">{{ component.text }}</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="blogtags">
                <h2 class="tag__title">Tags</h2>
                <div class="tag__buttons">
                    <button class="tag__button" @click="currentTab = nameButton"
                        :class="{ activated: currentTab === nameButton }" v-for="    nameButton     in     nameButtons    "
                        :key="nameButton.id">
                        {{ nameButton }}
                    </button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'DetailsPage',

    data() {
        return {
            nameButtons: ['Kitchen', 'Badroom', 'Building', 'Architecture', 'Kitchen-Planning', 'Bathroom'],
            currentTab: 'Kitchen',
            components: {
                "Kitchen": [
                    {
                        "id": "1",
                        "tittle": "Let’s Get Solution for Building Construction Work",
                        "image": require("../assets/detailsPage/project1.png"),
                        "date": "26 December,2022",
                        "text": " Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't lookeven slightly believable. \n \n Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
                    },
                    {
                        "id": "1",
                        "tittle": "Let’s Get Solution for Building Construction Work",
                        "image": require("../assets/detailsPage/project1.png"),
                        "date": "26 December,2022",
                        "text": " Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't lookeven slightly believable. \n \n Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
                    }
                ],
                "Badroom": [
                    {
                        "id": "1",
                        "tittle": "turpmaximus.posuere in.Contrary to",
                        "image": require("../assets/detailsPage/project2.png"),
                        "date": "25 December,2022",
                        "text": `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. \n Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt nam voluptatibus ad, molestiae sint eos molestias minus optio soluta numquam quod impedit sunt rem facilis. Asperiores veniam architectculpa quae! Non explicabo quibusdam, eum nesciunt nobis aspernatur nihil eveniet minus, alias quas unde praesentiureiciendis laboriosam laborum quaerat! Alias molestias quae in ipsa? Consequatur explicabo, iure atvoluptatibus quis alias?`
                    }
                ],
                "Building": [
                    {
                        "id": "1",
                        "tittle": "Let’s Get Solution for Building\nConstruction Work",
                        "image": require("../assets/detailsPage/project_3.png"),
                        "date": "24 December,2022",
                        "text": "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passag Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumou randomised words which don't look even slightly believable.\nEmbarrassing hidden in the middle of text. All the  Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
                    }
                ],
                "Architecture": [
                    {
                        "id": "1",
                        "tittle": "Lorem ipsum dolor sit amet",
                        "image": require("../assets/detailsPage/project_4.png"),
                        "date": "23 December,2022",
                        "text": "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't lookeven slightly believable. \n \n Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
                    }
                ],
                "Kitchen-Planning": [
                    {
                        "id": "1",
                        "tittle": "Let’s Get Solution",
                        "image": require("../assets/detailsPage/project_5.png"),
                        "date": "22 December,2022",
                        "text": "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.\nEmbarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tendto repeat predefined chunks as necessary.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt nam voluptatibus ad, molestiae sint eos molestias minus optio soluta numquam quod impedit sunt rem facilis. Asperiores veniam architectoculpa quae!Ea fugit error consequuntur, perspiciatis laborum delectus inventore at, veritatis autem magni nihilrerum eos repellat obcaecati? Explicabo repudiandae iure impedit, tenetur earum ad ullam quibusdaperferendis molestias.Laborum, minima? Non explicabo quibusdam, eum nesciunt nobis aspernatur nihil eveniet minus, alias quas unde praesentium reiciendis laboriosam laborum quaerat! Alias molestias quae in ipsa? Consequatur explicabo, iure atvoluptatibus quis alias?."
                    }
                ],
                "Bathroom": [
                    {
                        "id": "1",
                        "tittle": "Let’s Get Solution for Building Construction Work",
                        "image": require("../assets/detailsPage/project_6.png"),
                        "date": "21 December,2022",
                        "text": "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't lookeven slightly believable. \n \n Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
                    },
                ],
            }
        };
    },

    mounted() {

    },

    methods: {
        scroll() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    },
};
</script>

<style lang="css" scoped>
@import url('../scc/detailsPage.css');
</style>