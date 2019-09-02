<template>
  <div class="search">
    <div class="brand">
      <a href="/">Warena</a>
    </div>
    <form method="post" accept-charset="utf-8" id="search-form" @submit.prevent="userSearch" novalidate="novalidate">
      <div style="display:none;">
        <input type="hidden" name="_method" value="POST" />
        <input
          type="hidden"
          name="_csrfToken"
          autocomplete="off"
          value="1a5fdb187402b745a1b5d9f422943de88eed8c0c5a39443d9da5639e63d34b431d611f34e881dbc69ce6d17c16bb567abedf3c37d22978b7fb186887244edb3c"
        />
      </div>
      <div>
        <input
          id="search-input"
          class="form-control"
          type="text"
          placeholder="Search for another character"
          v-model="userId"
        />
        <span
          id="invalid-search"
          class="invalid-feedback"
        >Select a character from the dropdown list.</span>
      </div>
      <button id="search-submit" type="submit" class="btn">Go</button>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
import {arena} from '../api/index'
// import {mapState} from 'vuex'

export default {
  data() {
    return {
      userId: '',
    }
  },
  computed: {
    // ...mapState({
    //   userInfo: 'userInfo'
    // })
  },
  methods: {
    userSearch() {
      arena.fetch(this.userId)
        .then(res => {
          this.$store.state.userInfo = res
          console.log(this.$store.state.userInfo)
          this.clearId()
        })
        .catch(err => console.log(err))
    },
    clearId() {
      this.userId = ''
    }
  }
}
</script>