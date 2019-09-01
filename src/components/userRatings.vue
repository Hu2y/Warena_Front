<template>
  <div class="ratings">
    <div>
      <div>
        <h1>2v2</h1>
        <div class="rating">{{this.$store.state.userInfo.data[0].rating}}</div>
        <!-- <div data-toggle="tooltip" title="56 losses">82 wins (59%)</div> -->
        <span v-tooltip.top="'my text'">{{`Season : ${this.$store.state.userInfo.data[0].season_match_statistics.won}`}} </span> <br/>
        <span v-tooltip.top="'my text'">Weekly : </span>
        <div class="peaks">
          <div>
            <span data-toggle="tooltip" data-placement="right" title="August 27, 2019">
              <span class="label">Season High</span>
              2068
            </span>
          </div>
          <div>
            <span data-toggle="tooltip" data-placement="right" title="Battle for Azeroth Season 2">
              <span class="label">All Time High</span>
              2071
            </span>
          </div>
        </div>
      </div>
      <div>
        <h1>3v3</h1>
        <div class="rating">2103</div>
        <div data-toggle="tooltip" title="134 losses">157 wins (54%)</div>
        <div class="peaks">
          <div>
            <span data-toggle="tooltip" data-placement="right" title="August 27, 2019">
              <span class="label">Season High</span>
              2103
            </span>
          </div>
          <div>
            <span data-toggle="tooltip" data-placement="right" title="Battle for Azeroth Season 2">
              <span class="label">All Time High</span>
              2103
            </span>
          </div>
        </div>
      </div>
      <div>
        <h1>RBG</h1>
        <div class="rating">0</div>
        <div data-toggle="tooltip" title="0 losses">0 wins (0%)</div>
        <div class="peaks">
          <div>
            <span>
              <span class="label">Season High</span>
              0
            </span>
          </div>
          <div>
            <span>
              <span class="label">All Time High</span>
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed: {
    winrate() {
      return this.$store.state.userInfo.data[0].season_match_statistics
    }
  }
}
</script>