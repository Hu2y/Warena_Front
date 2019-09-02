<template>
  <main id="content">
    <div id="character-search">
      <user-search></user-search>
      <user-profile></user-profile>
    </div>
    <div>
      <user-ratings></user-ratings>
      <user-titles></user-titles>
    </div>
    <div class="achievements">
      <h1>Achievements</h1>
      <div class="brackets">
        <div>
          <h1>2v2</h1>
          <table>
            <tr data-toggle="tooltip" data-placement="right" title="June 18, 2019">
              <td>2200</td>
              <td>Battle for Azeroth Season 2</td>
            </tr>
            <tr data-toggle="tooltip" data-placement="right" title="February 29, 2016">
              <td>2000</td>
              <td>Warlords Season 3</td>
            </tr>
            <tr data-toggle="tooltip" data-placement="right" title="February 09, 2016">
              <td>1750</td>
              <td>Warlords Season 3</td>
            </tr>
            <tr data-toggle="tooltip" data-placement="right" title="January 27, 2016">
              <td>1550</td>
              <td>Warlords Season 3</td>
            </tr>
          </table>
        </div>
        <div>
          <h1>3v3</h1>
          <table>
            <tr data-toggle="tooltip" data-placement="right" title="July 18, 2016">
              <td>2700</td>
              <td>Warlords Season 3</td>
            </tr>
            <tr data-toggle="tooltip" data-placement="right" title="February 29, 2016">
              <td>2400</td>
              <td>Warlords Season 3</td>
            </tr>
            <tr data-toggle="tooltip" data-placement="right" title="February 03, 2016">
              <td>2200</td>
              <td>Warlords Season 3</td>
            </tr>
            <tr data-toggle="tooltip" data-placement="right" title="January 30, 2016">
              <td>2000</td>
              <td>Warlords Season 3</td>
            </tr>
            <tr data-toggle="tooltip" data-placement="right" title="January 28, 2016">
              <td>1750</td>
              <td>Warlords Season 3</td>
            </tr>
            <tr data-toggle="tooltip" data-placement="right" title="January 27, 2016">
              <td>1550</td>
              <td>Warlords Season 3</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="other">
        <div
          data-toggle="tooltip"
          data-html="true"
          title="Battle for Azeroth Season 2<br>Battle for Azeroth Season 1<br>Legion Season 7<br>Legion Season 5<br>Warlords Season 3"
        >
          <dl>
            <dt>Challenger</dt>
            <dd>
              <span class="quantity">5</span>
            </dd>
          </dl>
        </div>
        <div data-toggle="tooltip" title="February 02, 2016">
          <dl>
            <dt>Hot Streak</dt>
            <dd>Warlords Season 3</dd>
          </dl>
        </div>
        <div data-toggle="tooltip" title="November 25, 2017">
          <dl>
            <dt>Hotter Streak</dt>
            <dd>Legion Season 5</dd>
          </dl>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import userSearch from '../components/userSearch'
import userProfile from '../components/userProfile'
import userRatings from '../components/userRatings'
import userTitles from '../components/userTitles'

export default {
  components: {
    userSearch,
    userProfile,
    userRatings,
    userTitles,
  }
}
</script>