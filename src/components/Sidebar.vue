<template>
    <div>
        <v-app-bar color="transparent" class="hidden-md-and-up elevation-0" :app="$vuetify.breakpoint.mdAndDown">
            <v-app-bar-nav-icon dark @click="toogle('menu')"></v-app-bar-nav-icon>
        </v-app-bar>

            <v-navigation-drawer color="secondary" width="400px" :class="{lefts:this.$vuetify.breakpoint.mdAndUp}" v-model="download" dark fixed>
                <v-list>
                    <v-list-item class="mb-4">
                        <v-list-item-content>
                            <v-list-item-title>Queue</v-list-item-title>
                        </v-list-item-content>
                        <v-icon @click="toogle('download')">
                            mdi-sword-cross
                        </v-icon>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item v-for="downItems in this.$store.getters.downItem" :key="downItems.id" class="py-1">
                        <v-list-item-avatar>
                            <v-img :src="downItems.pict"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                        <v-list-item-title v-text="downItems.name"></v-list-item-title>
                        <v-list-item-subtitle>Downloading ...</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-progress-circular
                                indeterminate
                                size="50"
                            ><span>27%</span></v-progress-circular>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-navigation-drawer app color="black" width="200px" v-model="show" dark fixed>
                <v-list>
                    <v-list-item class="mb-4">
                        <v-list-item-avatar>
                            <img src="../assets/Hexagon.png" alt="">
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>Gaming</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <div v-for="item in items" :key="item.title">
                        <v-list-item v-if="item.title=='Download'" @click="toogle('download')">
                            <v-avatar size="40">
                                <v-icon>{{item.icon}}</v-icon>
                            </v-avatar>
                            <v-list-item-content class="ml-4">
                                <v-list-item-title>{{item.title}}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item v-else class="py-1" :to="item.url" link>
                            <v-avatar size="40">
                                <v-icon>{{item.icon}}</v-icon>
                            </v-avatar>
                            <v-list-item-content class="ml-4">
                                <v-list-item-title>{{item.title}}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </div>
                </v-list>
            </v-navigation-drawer>

        <v-navigation-drawer app right color="black" width="325px" dark fixed v-model="show2">
            <!-- !sign -->
            <v-row v-if="!sign" class="flex-column fill-height mx-0 justify-center">
                <v-col>
                    <v-list>
                        <!-- login -->
                        <v-form v-if="!register" @submit.prevent="onSubmit">
                            <v-window v-model="login">
                                <v-window-item class="px-3">
                                        <v-text-field
                                            outlined
                                            color="white"
                                            placeholder="Email"
                                            append-icon="mdi-chevron-right"
                                            v-model="form.email"
                                            @click:append="onSubmit()"
                                        ></v-text-field>
                                </v-window-item>

                                <v-window-item class="px-3">
                                        <v-text-field
                                            outlined
                                            type="password"
                                            placeholder="Password"
                                            append-icon="mdi-login"
                                            v-model="form.pass"
                                            @click:append="onLogin()"
                                        ></v-text-field>
                                </v-window-item>
                            </v-window>
                        </v-form>
                        <!-- register -->
                        <v-form v-if="register" @submit.prevent="onSubmit">
                            <v-window v-model="login">
                                <v-window-item class="px-3">
                                        <v-text-field
                                            outlined
                                            color="white"
                                            placeholder="Email"
                                            append-icon="mdi-chevron-right"
                                            v-model="form.email"
                                            @click:append="onSubmit()"
                                        ></v-text-field>
                                </v-window-item>
                                
                                <v-window-item class="px-3">
                                        <v-text-field
                                            outlined
                                            color="white"
                                            placeholder="Username"
                                            append-icon="mdi-chevron-right"
                                            v-model="form.username"
                                            @click:append="onSubmit()"
                                        ></v-text-field>
                                </v-window-item>

                                <v-window-item class="px-3">
                                        <v-text-field
                                            outlined
                                            type="password"
                                            placeholder="Password"
                                            append-icon="mdi-login"
                                            v-model="form.pass"
                                            @click:append="onSubmit()"
                                        ></v-text-field>
                                </v-window-item>

                                <v-window-item class="px-3">
                                        <v-text-field
                                            outlined
                                            type="password"
                                            placeholder="Re-Type Password"
                                            append-icon="mdi-login"
                                            v-model="form.rePass"
                                            @click:append="onRegister()"
                                        ></v-text-field>
                                </v-window-item>

                            </v-window>
                        </v-form>
                    </v-list>
                </v-col>
                <v-col class="d-flex justify-center mt-n12">
                    <v-avatar role="button" @click="regis" class="primary mt-n12" size="128px">
                        <v-icon v-if="register" size="96px" color="grey darken-2">mdi-account-plus</v-icon>
                        <v-icon v-if="!register" size="96px" color="grey darken-2">mdi-account</v-icon>
                    </v-avatar>
                </v-col>
            </v-row>
            <!-- sign -->
            <v-row v-else class="flex-column fill-height mx-0 justify-center">
                <v-col>
                    <v-list class="py-0">
                        <v-list-item>
                            <v-list-item-avatar>
                                <v-icon>mdi-account</v-icon>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title>{{userDetail.username}}</v-list-item-title>
                                <v-list-item-subtitle>{{userDetail.level}}</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-btn @click="onLogout()" text fab>
                                    <v-icon>mdi-logout</v-icon>
                                </v-btn>
                            </v-list-item-action>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item>
                            <v-list-item-title class="font-weight-light pl-4">
                                Friends Online (2/4)
                            </v-list-item-title>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-menu attach min-width="100%" offset-y>
                            <template v-slot:activator="{attr, on}">
                            <v-list-item class="mx-n3" v-bind="attr" v-on="on" link>
                                <v-list-item-action>
                                    <v-avatar size="12px" class="green"></v-avatar>
                                </v-list-item-action>
                                <v-list-item-content>
                                    <v-list-item-title>Yugita</v-list-item-title>
                                    <v-list-item-subtitle>Playing Arknights</v-list-item-subtitle>
                                </v-list-item-content>
                                <v-avatar>
                                    <v-img src="https://c4.wallpaperflare.com/wallpaper/1009/588/916/anime-anime-girls-digital-art-artwork-neko-ears-hd-wallpaper-preview.jpg"></v-img>
                                </v-avatar>
                            </v-list-item>
                            </template>
                            <v-list color="grey darken-3">
                                <v-list-item link>Test 1</v-list-item>
                                <v-list-item link>Test 2</v-list-item>
                            </v-list>
                        </v-menu>
                    </v-list>
                </v-col>
            </v-row>
        </v-navigation-drawer>

        <v-btn fixed bottom right fab color="blue" @click="toogle('account')" style="z-index: 9">
            <v-icon class="mdi-light">mdi-account-multiple</v-icon>
        </v-btn>    
    </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
export default {
    created() {
         firebase.auth().onAuthStateChanged(user => {
            if(user) {
                this.sign = true
            }else {
                this.sign = false
            }
        })
    },
    data() {
        return {
            register: false,
            sign: false,
            show: true,
            show2: true,
            download: false,
            login: 0,
            value: 0,
            interval: {},
            form: {
                email: '',
                pass: '',
                rePass: '',
                username: ''
            },
            items: [
                    { url:'/',title: 'Home', icon: 'mdi-home' },
                    { url:'/store',title: 'Store', icon: 'mdi-fire' },
                    { url:'/library',title: 'Library', icon: 'mdi-microsoft' },
                    { url:'',title: 'Download', icon: 'mdi-download' },
                    { url:'/settings',title: 'Settings ', icon: 'mdi-wrench' },
                  ]
                  ,
        }
    },
    computed: {
        userDetail() {
            return this.$store.state.userData
        }
    },
    beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted () {
      this.interval = setInterval(() => {
        if (this.value === 100) {
          return (this.value = 0)
        }
        this.value += 10
      }, 900)
    },
    methods: {
        onLogin() {
            this.$store.dispatch('login',{
                email: this.form.email,
                pass: this.form.pass
            })
            this.login = 0
            this.form.email = ''
            this.form.username = ''
            this.form.pass = ''
            this.form.rePass = ''
        },
        async onRegister() {
            this.$store.dispatch('register',{
                username: this.form.username,
                email: this.form.email,
                pass: this.form.pass
            })
        },
        onLogout() {
            this.$store.dispatch('logout')
            this.login = 0
            this.form.email = ''
            this.form.username = ''
            this.form.pass = ''
            this.form.rePass = ''
        },
        toogle(pointer) {
            if(pointer == "menu") {
                this.show = !this.show
            }else if(pointer == "account") {
                this.show2 = !this.show2
            }else if(pointer == "download") {
                this.download = !this.download
            }
        },
        onSubmit() {
            this.login = this.login + 1
        },
        regis() {
            this.register = !this.register
        },
        link(urls) {
            this.$router.replace({name: urls})
        }
    }
}
</script>
