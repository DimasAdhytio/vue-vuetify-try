<template>
    <div>
        <v-main class="primary">
        <!-- <v-container>
                <v-row>
                    <v-col md="4" cols="12">
                        <v-hover
                        v-slot:default="{ hover }"
                        >
                            <v-card>
                                <a @click="pis">
                                    <v-img style="border-radius:inherit">
                                        <v-img height="150px" src="https://material-launcher.vuetifyjs.com/img/bg.75de614f.png">
                                            <v-row :class="{trans : hover}" class="fill-height ma-0 transition-swing align-center justify-center">
                                                <v-img max-width="180px" src="https://material-launcher.vuetifyjs.com/img/logo.bd4babb9.png"></v-img>
                                            </v-row>
                                        </v-img>
                                    </v-img>
                                </a>
                            </v-card>
                        </v-hover>
                    </v-col>
                    <v-col md="4" cols="12">
                        <v-hover
                        v-slot:default="{ hover }"
                        >
                            <v-card>
                                <a @click="pis(2)">
                                    <v-img style="border-radius:inherit">
                                        <v-img height="150px" src="https://material-launcher.vuetifyjs.com/img/bg.9e906a27.png">
                                            <v-row :class="{trans : hover}" class="fill-height ma-0 transition-swing align-center justify-center">
                                                <v-img max-width="180px" src="https://material-launcher.vuetifyjs.com/img/logo.8c421cb4.png"></v-img>
                                            </v-row>
                                        </v-img>
                                    </v-img>
                                </a>
                            </v-card>
                        </v-hover>
                    </v-col>
                    <v-col md="4" cols="12">
                        <v-hover
                        v-slot:default="{ hover }"
                        >
                            <v-card>
                                <a @click="pis(3)">
                                    <v-img style="border-radius:inherit">
                                        <v-img height="150px" src="https://material-launcher.vuetifyjs.com/img/bg.3aa3f190.png">
                                            <v-row :class="{trans : hover}" class="fill-height ma-0 transition-swing align-center justify-center">
                                                <v-img max-width="180px" src="https://material-launcher.vuetifyjs.com/img/logo.65372642.png"></v-img>
                                            </v-row>
                                        </v-img>
                                    </v-img>
                                </a>
                            </v-card>
                        </v-hover>
                    </v-col>                                        
                </v-row>
            </v-container>

            <v-container class="pt-0">
                <v-row>
                    <v-col>
                        <v-hover
                        v-slot:default="{ hover }"
                        >
                            <v-card>
                                <a @click="pis(4)">
                                    <v-img style="border-radius:inherit">
                                        <v-img src="../assets/arknights.jpg">
                                            <v-row :class="{trans : hover}" class="fill-height ma-0 transition-swing align-center justify-center">
                                                <v-img max-width="180px" src="../assets/arknights(logo).png"></v-img>
                                            </v-row>
                                        </v-img>
                                    </v-img>
                                </a>
                            </v-card>
                        </v-hover>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col md="6" cols="12">
                        <v-hover
                        v-slot:default="{ hover }"
                        >
                            <v-card>
                                <a @click="pis(5)">
                                    <v-img style="border-radius:inherit">
                                        <v-img height="524px" src="https://material-launcher.vuetifyjs.com/img/bg.faeda414.png">
                                            <v-row :class="{trans : hover}" class="fill-height ma-0 transition-swing align-center justify-center">
                                                <v-img max-width="180px" src="https://material-launcher.vuetifyjs.com/img/logo.b8332a1e.png"></v-img>
                                            </v-row>
                                        </v-img>
                                    </v-img>
                                </a>
                            </v-card>
                        </v-hover>
                    </v-col>
                    <v-col cols="12" md="6" class="pt-0">
                        <v-row>
                            <v-col cols="12">
                                <v-hover
                                v-slot:default="{ hover }"
                                >
                                    <v-card>
                                        <a @click="pis(6)">
                                            <v-img style="border-radius:inherit">
                                                <v-img height="250px" src="https://material-launcher.vuetifyjs.com/img/bg.0d77d3ed.png">
                                                    <v-row :class="{trans : hover}" class="fill-height ma-0 transition-swing align-center justify-center">
                                                        <v-img max-width="180px" src="https://material-launcher.vuetifyjs.com/img/logo.d7c7e678.png"></v-img>
                                                    </v-row>
                                                </v-img>
                                            </v-img>
                                        </a>
                                    </v-card>
                                </v-hover>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-hover
                                v-slot:default="{ hover }"
                                >
                                    <v-card>
                                        <a @click="pis(7)">
                                            <v-img style="border-radius:inherit">
                                                <v-img height="250px" src="https://material-launcher.vuetifyjs.com/img/bg.3db63dfb.png">
                                                    <v-row :class="{trans : hover}" class="fill-height ma-0 transition-swing align-center justify-center">
                                                        <v-img max-width="180px" src="https://material-launcher.vuetifyjs.com/img/logo.bb5f50eb.png"></v-img>
                                                    </v-row>
                                                </v-img>
                                            </v-img>
                                        </a>
                                    </v-card>
                                </v-hover>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" md="6" class="pt-0">
                        <v-row>
                            <v-col>
                                <v-hover
                                v-slot:default="{ hover }"
                                >
                                    <v-card>
                                        <a @click="pis(8)">
                                            <v-img style="border-radius:inherit">
                                                <v-img height="250px" src="../assets/WD2.jpg">
                                                    <v-row :class="{trans : hover}" class="fill-height ma-0 transition-swing align-center justify-center">
                                                        <v-img max-width="180px" src="../assets/WD2(logo).png"></v-img>
                                                    </v-row>
                                                </v-img>
                                            </v-img>
                                        </a>
                                    </v-card>
                                </v-hover>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-hover
                                v-slot:default="{ hover }"
                                >
                                    <v-card>
                                        <a @click="pis(9)">
                                            <v-img style="border-radius:inherit">
                                                <v-img height="250px" src="../assets/DmC.jpg">
                                                    <v-row :class="{trans : hover}" class="fill-height ma-0 transition-swing align-center justify-center">
                                                        <v-img max-width="180px" src="../assets/DmC(logo).png"></v-img>
                                                    </v-row>
                                                </v-img>
                                            </v-img>
                                        </a>
                                    </v-card>
                                </v-hover>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col md="6" cols="12">
                        <v-hover
                        v-slot:default="{ hover }"
                        >
                            <v-card>
                                <a @click="pis(10)">
                                    <v-img style="border-radius:inherit">
                                        <v-img height="524px" src="../assets/assassins.jpg">
                                            <v-row :class="{trans : hover}" class="fill-height ma-0 transition-swing align-center justify-center">
                                                <v-img max-width="180px" src="../assets/assassins(logo).png"></v-img>
                                            </v-row>
                                        </v-img>
                                    </v-img>
                                </a>
                            </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
            
            </v-container> -->

            <v-container>
                <v-row>
                    <v-col md="6" v-for="items in storeItem" :key="items.id">
                        <v-hover
                        v-slot:default="{ hover }"
                        >
                            <v-card>
                                <a @click="pis(items.id)">
                                    <v-img style="border-radius:inherit">
                                        <v-img height="150px" :src="items.backImg">
                                            <v-row :class="{trans : hover}" class="fill-height ma-0 transition-swing align-center justify-center">
                                                <v-img max-width="180px" :src="items.logo"></v-img>
                                            </v-row>
                                        </v-img>
                                    </v-img>
                                </a>
                            </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    computed: {
        storeItem() {
            // console.log(this.$store.state.allOfItems);
            return this.$store.state.allOfItems
        }
    },
    methods: {
        pis(Id) {
            this.$store.commit('filter',Id)
            this.$router.push({name: 'Games', params: {itemId: Id}})
        }
    }
}
</script>

<style lang="scss">
    .trans {
        background: rgba(255,255,255,0.2);
    }
</style>