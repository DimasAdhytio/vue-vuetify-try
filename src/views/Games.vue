<template>
    <v-main>
        <v-container v-for="itemsView in itemView" :key="itemsView.id" class="py-0">
            <v-img :src="itemsView.backImg">
                <router-link to="/store">
                    <v-subheader>Back to Store</v-subheader>
                </router-link>
                <v-row class="fill-height ma-0 transition-swing align-center justify-center">
                    <v-col class="text-center">
                        <v-img class="mx-auto mb-5" max-width="200px" :src="itemsView.logo"></v-img>
                        <v-btn @click="buy(itemsView.id,userData.id)" :disabled="userData.membership != 'member'" color="blue" min-width="225px" height="52px">Purchase</v-btn>
                        <!-- <v-btn v-else-if="!itemView.installed" color="blue" min-width="225px" height="52px">install</v-btn> -->
                        <!-- <v-btn v-if="itemView.installed" color="blue" min-width="225px" height="52px">Launch</v-btn> -->
                        <!-- <v-row v-if="purchase">
                            <v-col class="text-center">
                                <v-btn to="/library" color="success" min-width="225px" height="52px">Open at Library</v-btn>
                            </v-col>
                        </v-row> -->
                    </v-col>
                </v-row>
            </v-img>
            <v-sheet class="px-3 py-5" color="grey lighten-1" light>
                <h1 class="display-2 font-weight-medium mb-4">{{itemsView.title}}</h1>
                <v-row class="align-center">
                    <v-col cols="9">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nesciunt odio voluptas, saepe unde sunt enim fugit quidem dolorum totam rem vel perspiciatis deserunt praesentium. Eius amet quidem voluptatum nam?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nesciunt odio voluptas, saepe unde sunt enim fugit quidem dolorum totam rem vel perspiciatis deserunt praesentium. Eius amet quidem voluptatum nam?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nesciunt odio voluptas, saepe unde sunt enim fugit quidem dolorum totam rem vel perspiciatis deserunt praesentium. Eius amet quidem voluptatum nam?
                        </p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <LazyYoutubeVideo src="https://www.youtube.com/embed/4vajlWofWS8" />
                    </v-col>
                </v-row>
            </v-sheet>
        </v-container>
    </v-main>
</template>

<script>
import LazyYoutubeVideo from "vue-lazy-youtube-video";
import { mapState } from "vuex"
export default {
    data() {
        return {
            // itemView : this.$store.state.allOfItems.filter(item => item.id == this.$route.params.itemId)
            // itemView: this.$store.state.storeItems[this.$route.params.itemId-1],
            // purchase: this.$store.state.storeItems[this.$route.params.itemId-1].purchased
        }
    },
    computed: {
        ...mapState(['userData']),
        itemView() {
            return this.$store.state.allOfItems.filter(item => item.id == this.$route.params.itemId)
        }
    },
    components: {
        LazyYoutubeVideo
    },
    watch: {
        // purchase: function(val) {
        //    if (val == true) {
                // alert(val)
            // } 
        // }
        // if (buy == true) {
        //     alert("Purchased")
        // }
    },
    methods: {
        buy(itemId,userId) {
            this.$store.dispatch('buy', {
                item : itemId,
                user : userId
            })
            console.log(itemId)
            console.log(userId)
            alert(itemId)
            alert(userId)
        }
        // buy() {
        //     this.$store.commit('sold',{
        //             id: this.itemView.id,
        //             pict: this.itemView.pict,
        //             logo: this.itemView.logo,
        //             name: this.itemView.name,
        //             size: this.itemView.size,
        //             purchased: true,
        //             installed: false,
        //             downloading: false,
        //             version: this.itemView.version
        //         }
        //     )
        //     this.purchase = true
        // }
    }
}
</script>