import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    libId: 0,
    userData: {},
    allOfItems:[],
    library: [],
    storeItems: [
        {
          id: 1,
          pict: 'https://material-launcher.vuetifyjs.com/img/bg.75de614f.png',
          logo: 'https://material-launcher.vuetifyjs.com/img/logo.bd4babb9.png',
          name: 'Fallen Kingdom',
          size: '2.5GB',
          purchased: false,
          installed: false,
          downloading: false,
          version: '0.10.2'
        },
        {
          id: 2,
          pict: 'https://material-launcher.vuetifyjs.com/img/bg.9e906a27.png',
          logo: 'https://material-launcher.vuetifyjs.com/img/logo.8c421cb4.png',
          name: 'Phase',
          size: '10.2GB',
          purchased: false,
          installed: false,
          downloading: false,
          version: '12.2'
        },
        {
          id:3,
          pict: 'https://material-launcher.vuetifyjs.com/img/bg.3aa3f190.png',
          logo: 'https://material-launcher.vuetifyjs.com/img/logo.65372642.png',
          name: 'Astras II',
          size: '4.25GB',
          purchased: false,
          installed: false,
          downloading: false,
          version: '0.0.1'
        },
        {
          id: 4,
          pict: 'https://c4.wallpaperflare.com/wallpaper/1009/588/916/anime-anime-girls-digital-art-artwork-neko-ears-hd-wallpaper-preview.jpg',
          logo: 'https://www.yondaapk4you.com/wp-content/uploads/2020/01/logo.364fe65a.png',
          name: 'Arknights',
          size: '1.6GB',
          purchased: false,
          installed: false,
          downloading: false,
          version: '0.9.01'
        },
        {
          id: 5,
          pict: 'https://material-launcher.vuetifyjs.com/img/bg.faeda414.png',
          logo: 'https://material-launcher.vuetifyjs.com/img/logo.b8332a1e.png',
          name: 'SOL 643',
          size: '9.8GB',
          purchased: false,
          installed: false,
          downloading: false,
          version: '1.2.x'
        },
        {
          id: 6,
          pict: 'https://material-launcher.vuetifyjs.com/img/bg.0d77d3ed.png',
          logo: 'https://material-launcher.vuetifyjs.com/img/logo.d7c7e678.png',
          name: 'Atomic 12',
          size: '1.02GB',
          purchased: false,
          installed: false,
          downloading: false,
          version: '0.1'
        },
        {
          id: 7,
          pict: 'https://material-launcher.vuetifyjs.com/img/bg.3db63dfb.png',
          logo: 'https://material-launcher.vuetifyjs.com/img/logo.bb5f50eb.png',
          name: 'Elder Earth',
          size: '546MB',
          purchased: false,
          installed: false,
          downloading: false,
          version: '0.9.01'
        },
        {
          id: 8,
          pict: 'https://images6.alphacoders.com/709/thumb-1920-709832.jpg',
          logo: 'https://gaming.tobii.com/wp-content/uploads/2017/10/WD2Logo350.png',
          name: 'Watch Dogs 2',
          size: '30.78GB',
          purchased: false,
          installed: false,
          downloading: false,
          version: '2.2.0'
        },
        {
          id: 9,
          pict: 'https://i.ytimg.com/vi/cjt8foO2lMY/maxresdefault.jpg',
          logo: 'https://i.pinimg.com/originals/a3/58/13/a3581399eeae2de04c67c196178b48a1.png',
          name: 'Devil May Cry 5',
          size: '35.12GB',
          purchased: true,
          installed: false,
          downloading: false,
          version: '1.13'
        },
        {
          id: 10,
          pict: 'https://wallpaperset.com/w/full/9/7/0/439980.jpg',
          logo: 'https://cdn.freebiesupply.com/images/large/2x/assassins-creed-logo-black-and-white.png',
          name: 'Assassins Creed',
          size: '10.9GB',
          purchased: false,
          installed: false,
          downloading: false,
          version: '0.12.x'
        }
    ]
  },
  getters: {
    libItem(state) {
      return state.storeItems.filter(item => item.purchased == true)
    },
    viewItem(state) {
      return state.storeItems.filter(item => item.id == state.libId)
    },
    downItem(state) {
      return state.storeItems.filter(item => item.downloading == true)
    }
  },
  mutations: {
    filter(state,Id) {
      state.libId = Id
    },
    sold(state,data) {
      const index = data.id - 1 

      state.storeItems.splice(index,1,{
        id: data.id,
        pict: data.pict,
        logo: data.logo,
        name: data.name,
        size: data.size,
        purchased: data.purchased,
        installed: data.installed,
        downloading: data.downloading,
        version: data.version
      })
    },
    setUserData(state,{val, id}) {
      val.id = id
      state.userData = val
    },
    fetchStoreItems(state,docs) {
      docs.forEach(doc => {
          let item = doc.data()
          item.id = doc.id
          state.allOfItems.push(item)
      })
      // console.log(state.allOfItems);
    },
    setLibraryItems(state,docs) {
      docs.forEach(doc => {
          let item = doc.data()
          item.id = doc.id
          state.library.push(item)
      })
      // console.log('test');
      console.log(state.library);
    }
  },
  actions: {
    async login({ dispatch },form) {
      try {
        const { user } = await firebase.auth().signInWithEmailAndPassword(form.email,form.pass)
        dispatch('fetchUserData', user)
      }catch(err) {
          alert(err)
      }
    },
    async register({ dispatch }, form) {
      try {
          const { user } = await firebase.auth().createUserWithEmailAndPassword(form.email,form.pass)
          await firebase.firestore().collection('users').doc(user.uid).set({
              username: form.username,
              level: 'Novice',
              membership: 'member'
          })
          dispatch('fetchUserData', user)
      }catch(err) {
          alert(err)
      }
    },
    async logout({ dispatch }) {
      await firebase.auth().signOut()
      dispatch('fetchUserData', null)
    },
    async allItems({ commit }) {
      const docs = await firebase.firestore().collection('games').get()
      commit('fetchStoreItems', docs)
    },
    async fetchUserData({ commit }, user) {
      if(user != null) {
        const usersData = await firebase.firestore().collection('users').doc(user.uid).get()
        commit('setUserData', {
            val : usersData.data(),
            id : user.uid
          }
        )
      }else{
        commit('setUserData', '')
      }
    },
    async buy({ dispatch }, data) {
      const docId = `${data.user}_${data.item}`
      await firebase.firestore().collection('purchased').doc(docId).set({
        user : data.user,
        item : data.item,
        install : false
      })
      dispatch('library',data.user)
    },
    async library({ dispatch }, user) {
      const docs = await firebase.firestore().collection('purchased').where('user','==',user).get()
      // console.log(user);
      dispatch('fetchLibraryItems', docs)
    },
    async fetchLibraryItems({ commit }, docs) {
      let temp_item = []
      let item = []
      docs.forEach(doc => {
        temp_item.push(doc.data())
      })

      // for (const items in temp_item) {
      //   if (temp_item.hasOwnProperty(items)) {
      //     const element = temp_item[items];
      //     log
      //   }
      // }

      // for (const items in temp_item) {
      //   console.log(items);
      //   const temp_doc = await firebase.firestore.collection('games').doc(items.item).get()
      //   console.log(temp_doc);
      //   item.push(temp_doc)
      // }
      console.log(item);
      commit('setLibraryItems',item)
    }
  },
  modules: {
  }
})
