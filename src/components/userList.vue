<template>
  <div class="container">
    <div id="root" class="box">
      <label class="label">Enter text here</label>
      <input class="input is-medium" @keyup="typing" type="text" id="input" v-model="userId">
      <p class="input-value">
        <span class="highlight">{{ valid }}</span>
      </p>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import axios from "axios";

export default {
  data() {
    return {
      userId: '',
      valid: false
    };
  },
  methods: {
    typing: function(e){
      console.log(e.target.value)
      let message = e.target.value
      let pattern = /([^가-힣\x20])/i
      this.valid = (message.length > 0 && pattern.test(message) === false)
      if(this.valid == true) {
        axios.get(`http://localhost:3000/api/player/message`)   // ${this.userId}`)
          .then(res => console.log(res))
      }
    }
  }
};
</script>

<style scoped>
.input-value {
  margin-top: 1em;
  font-size: 1.25em;
}

.highlight {
  color: #00d1b2;
  font-weight: bold;
}
</style>
