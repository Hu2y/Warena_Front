import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store =new Vuex.Store({
  state: {
    userInfo: {code: "0000", message: "Success", 
    data: 
      [
        {name: '닉네임', faction: "Alliance", rating: 3000, season_match_statistics: {played: 100, won: 70, lost:30}},
        {name:'Huey',faction: "HORDE", rating: 3000}
      ]}
  },
  getters: {
    userStat(state) {
      return state.userInfo
    }
  }
})