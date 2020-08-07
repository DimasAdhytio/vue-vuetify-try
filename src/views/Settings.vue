<template>
    <div>
        <v-main class="grey darken-4">
            <v-toolbar dark flat class="secondary">
                <v-btn to="/" icon>
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                <v-divider class="mx-3" inset vertical></v-divider>
                Settings
            </v-toolbar>
            <v-divider dark></v-divider>
            <div class="pa-3">
                <div class="mb-3">
                    Language
                </div>
                <v-form>
                        <v-select
                            v-model="selected"
                            :items="items"
                            solo
                            flat
                            background-color="secondary"
                            style="max-width:400px"
                            prepend-inner-icon="mdi-earth"
                        ></v-select>
                        <v-checkbox
                            color="grey darken-2"
                            label="Minimize To System Tray"
                        ></v-checkbox>
                        <v-checkbox
                            color="grey darken-2"
                            label="Run When My Computer Starts"
                        ></v-checkbox>
                        <v-checkbox
                            color="grey darken-2"
                            label="Enable developer mode"
                        ></v-checkbox>
                        <v-checkbox
                            color="grey darken-2"
                            label="Hide Purchased Products"
                        ></v-checkbox>
                        <v-divider></v-divider>
                        <v-checkbox
                            color="grey darken-2"
                            label="Use Proxy"
                        ></v-checkbox>
                        <v-divider></v-divider>
                        <v-list class="secondary mt-3" max-width="400px">
                            <v-list-item link>Edit Cached Storage Location</v-list-item>
                            <v-list-item link>Troubleshoot</v-list-item>
                            <v-list-item link>Support</v-list-item>
                            <v-list-item link>Show Logs</v-list-item>
                        </v-list>
                        <v-divider class="mt-3 mb-4"></v-divider>
                        <div class="text-center subheader">Vuetify Material Design | 2019</div>
                </v-form>
            </div>
        </v-main>
    </div>
</template>
<script>
export default {
    data() {
        return {
            checked: false,
            items: [
                "English (USA)",
                "English (UK)"
            ],
            selected: "English (USA)"
        }
    }
}
</script>