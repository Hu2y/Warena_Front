import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store =new Vuex.Store({
  state: {
    userInfo: {code: "0000", message: "Success", data: 
      [
        {name: '닉네임', faction: "Alliance", rating: 3000, season_match_statistics: {played: 100, won: 70, lost:30}, weekly_match_statistics: {played: 50, won: 30, lost:20}},
        {name:'Huey',faction: "HORDE", rating: 3000, season_match_statistics: {played: 150, won: 70, lost:80}, weekly_match_statistics: {played: 70, won: 50, lost:20}}
      ]}
  },
  getters: {
    userStat(state) {
      return state.userInfo
    },
    // winrating(state) {
    //   return parseInt(state.userInfo.season_match_statistics.won/state.userInfo.season_match_statistics.played*100)
    // }
  }
})