<template>
    <div>
        <v-main style="min-height:639px" class="primary">
            <v-container>
                <v-row>
                    <v-col sm="6" md="4" cols="12" v-for="data in library" :key="data.id">
                        <v-card class="secondary" dark>
                            <router-link :to="{name: 'Games', params: {itemId: data.id}}" class="round">
                                <v-img height="150px" eager :src="data.pict">
                                    <v-row :class="{inactive:!data.installed}" class="fill-height align-center justify-center ma-0 transition-swing">
                                        <v-img max-width="180px" style="z-index:-1" :src="data.logo"></v-img>
                                    </v-row>
                                </v-img>
                            </router-link>
                            <v-sheet v-if="loading&&itemId==data.id" class="transition-swing launch-action transparent" height="64px">
                                    <v-row v-if="loading" @click="showModal(data.id)" class="fill-height justify-center align-center ma-0">
                                        <!-- <div class="text-uppercase ma-0">
                                            Download...
                                        </div> -->
                                        <v-progress-circular
                                            indeterminate
                                        ></v-progress-circular>
                                    </v-row>
                                </v-sheet>
                            <v-hover v-else>
                                <v-sheet slot-scope="{ hover }" :class="{ blue:hover }" class="transition-swing launch-action transparent" height="64px">
                                    <v-menu close-on-content-click attach min-width="100%" offset-y>
                                        <template v-slot:activator="{on, attrs}">
                                            <v-row v-if="data.installed == false" class="fill-height justify-center align-center ma-0" @click="showModal(data.id)" role="button">
                                                <div class="text-uppercase ma-0">
                                                    Install
                                                </div>
                                            </v-row>
                                            <v-row v-else class="fill-height align-center ma-0">
                                                <!-- <div v-if="hover" class="text-uppercase fill-height d-flex align-center ml-4 grow">
                                                    Settings
                                                </div> -->
                                                <div role="button" @click="showOver(data.id)" class="text-uppercase fill-height d-flex align-center ml-4 grow">
                                                    Launch
                                                </div>                                                 
                                                <v-sheet :class="{info : hover}" v-bind="attrs" v-on="on" class="d-flex justify-center align-center transition-swing transparent" role="button" width="64px" height="64px">
                                                    <v-icon>mdi-wrench</v-icon>
                                                </v-sheet>
                                            </v-row>
                                        </template>
                                        <v-list>
                                                <v-list-item link>Verify</v-list-item>
                                                <v-list-item link>Create a shortcut</v-list-item>
                                                <v-list-item link>
                                                    <v-list-item-content>
                                                        Auto update
                                                    </v-list-item-content>
                                                    <v-list-item-action>
                                                        <v-switch></v-switch>
                                                    </v-list-item-action>
                                                </v-list-item>
                                                <v-list-item @click="install(data.id,false)" link>
                                                    <v-list-item-subtitle>
                                                        Uninstall
                                                    </v-list-item-subtitle>
                                                    <v-list-item-subtitle class="text-right">
                                                        {{ data.size }}
                                                    </v-list-item-subtitle>
                                                </v-list-item>
                                                <v-divider></v-divider>
                                                <v-list-item>
                                                    <v-list-item-subtitle>
                                                        Version
                                                    </v-list-item-subtitle>
                                                    <v-list-item-subtitle class="text-right">
                                                        {{ data.version }}
                                                    </v-list-item-subtitle>
                                                </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </v-sheet>
                            </v-hover>
                        </v-card>
                        <v-dialog v-if="itemId == data.id" v-model="modal" max-width="600px">
                            <v-card light>
                                <v-card-title>
                                    Choose install location
                                </v-card-title>
                                <v-card-text>
                                    <v-form>
                                        <v-text-field
                                            solo-inverted
                                            hide-details
                                            v-model="folder"
                                            class="mb-3"
                                        >
                                            <template v-slot:prepend-inner>
                                                <v-sheet class="pa-2 mr-2 secondary" dark>Folder</v-sheet>
                                            </template>
                                        </v-text-field>

                                        <v-text-field
                                            solo-inverted
                                            disabled
                                            hide-details
                                            v-model="path"
                                            class="mb-3"
                                        >
                                            <template v-slot:prepend-inner>
                                                <v-sheet class="pa-2 mr-2 secondary" dark>Path</v-sheet>
                                            </template>
                                        </v-text-field>
                                        <v-checkbox
                                            label="Auto Update"
                                            hide-details
                                        ></v-checkbox>
                                        <v-checkbox
                                            label="Create Shortcut"
                                            hide-details
                                        ></v-checkbox>
                                    </v-form>
                                </v-card-text>
                                <v-card-actions class="justify-space-between primary">
                                    <v-btn color="primary" depressed @click="modal = false">Cancel</v-btn>
                                    <v-btn v-if="loading&&itemId==data.id" color="success">
                                        <v-progress-circular indeterminate></v-progress-circular>
                                    </v-btn>
                                    <v-btn v-else color="success" @click="install(data.id,true)">Install</v-btn>
                                </v-card-actions>                        
                            </v-card>
                        </v-dialog>
                        <v-overlay v-if="itemId == data.id" v-model="over">
                            <v-img width="400px" :src="data.pict">
                                <v-row class="fill-height justify-center align-center ma-0">
                                    <v-progress-circular
                                        indeterminate
                                        size="70"
                                    ></v-progress-circular>
                                </v-row>
                            </v-img>
                        </v-overlay>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            over: false,
            modal: false,
            folder: 'C:/',
            itemId: 0,
            loading: false
        }
    },
    watch: {
      loading (val) {
        if (!val) return
        setTimeout(() => (
            this.loading = false, 
            this.modal = false,
            this.over = false
            ), 4000)
      },
    },
    computed: {
        ...mapState(['library']),
        path() {
            return `${this.folder}Game`
        }
    },
    methods: {
        install(id,ins) {
            this.loading = ins
            const installItem = this.$store.state.storeItems[id-1]
            // alert(installItem.id)
            let time = 0
            if (ins == true) {
                time = 4000
            }
            this.$store.commit('sold',{
                    id: installItem.id,
                    pict: installItem.pict,
                    logo: installItem.logo,
                    name: installItem.name,
                    size: installItem.size,
                    purchased: true,
                    installed: !ins,
                    downloading: true,
                    version: installItem.version
                }
            )
            setTimeout(() => (
                this.$store.commit('sold',{
                        id: installItem.id,
                        pict: installItem.pict,
                        logo: installItem.logo,
                        name: installItem.name,
                        size: installItem.size,
                        purchased: true,
                        installed: ins,
                        downloading: false,
                        version: installItem.version
                    }
                )
            ),time)
            this.modal = false
        },
        showModal(id) {
            this.modal = true
            this.itemId = id
        },
        showOver(id) {
            this.over = true
            this.itemId = id
            this.loading = true
        }
    }
}
</script>

<style lang="scss">
.inactive {
    background: rgba(255,255,255,0.3);
}
.round {
    border-radius: 100%;
}
</style>