<template>
  <div id="character" class="character">
    <div>
      <div :class="{flag: true, horde: this.isHorde}"></div>
      <section>
        <div
          class="avatar"
          style="background-image: url(https://render-us.worldofwarcraft.com/character/tichondrius/235/191288043-avatar.jpg)"
        ></div>
        <div class="details">
          <h2 class="name">
            <span class="priest">{{this.$store.state.userInfo.data[0].name}}</span> the Love Fool
          </h2>
          <span class="guild">
            <a
              href="https://us.battle.net/wow/en/guild/tichondrius/Caf%C3%A9%20Bleu/"
            >&lt;Café Bleu&gt;</a>
          </span>
          <span class="race">Undead</span>
          <span class="spec">Discipline</span>
          <span class="class">Priest</span>
          <span class="realm">Tichondrius</span>
          <div class="armory">
            <a
              target="_blank"
              href="https://worldofwarcraft.com/en-us/character/tichondrius/Eeffgg"
            >
              View
              Armory
            </a>
          </div>
          <div class="updated">
            Last Updated
            <span id="last-updated">3 minutes ago</span>
          </div>
        </div>
        <div class="score">
          <div>
            <span class="badge">107</span>
          </div>
        </div>
        <div class="footer">
          <div class="checked">
            <i class="far fa-eye"></i>
            Checked 8 times
          </div>
          <div class="ilvl">
            <span class="badge">434</span>
            Item Level
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHorde: false,
    }
  },

  updated() {
    if(this.$store.state.userInfo.data[0].faction == "HORDE") {
      this.isHorde = true
    }
  }
}
</script>