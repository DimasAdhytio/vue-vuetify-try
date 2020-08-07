<template>
  <v-main class="primary">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-subheader class="px-0" dark>News</v-subheader>
        </v-col>
        <v-col cols="12" v-for="tidings in news" :key="tidings.id">
          <v-card color="secondary" class="elevation-6" dark>
            <v-card-title class="font-weight-regular">
              {{tidings.title}}
            </v-card-title>
            <v-card-subtitle class="my-0 text-left">
              <v-avatar color="grey darken-2" size="20">
                <v-icon size="15" class="mdi-light mdi-inactive">mdi-pencil</v-icon>
              </v-avatar>
              &nbsp;
              {{tidings.author}} &middot; {{tidings.upload}}
            </v-card-subtitle>
            <a href="#">
              <v-img
                :src="tidings.img"
                height="400px"
              >
              </v-img>
            </a>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>

export default {
  data() {
    return {
      news: [
        {
          id: 1,
          title: 'Upcoming Sci-FI Horror',
          author: 'Jhon Smith',
          upload: '6h ago',
          img: 'https://material-launcher.vuetifyjs.com/img/article1a.2c2ed427.png'
        },
        {
          id: 2,
          title: '10 Indie Games to Watch in 2019',
          author: 'Jhon Smith',
          upload: '12h ago',
          img: 'https://material-launcher.vuetifyjs.com/img/article2a.2e971f58.png'
        }
      ]
    }
  }
}
</script>
