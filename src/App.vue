<template>
  <div id="app">
    <nav-bar></nav-bar>
    <front-page></front-page>
    <app-footer></app-footer>
    <div>
      <i class="loader invisible"></i>
    </div>
  </div>
</template>

<script>
import navBar from './components/navBar'
import AppFooter from './components/AppFooter'
import FrontPage from './view/FrontPage'

export default {
  components: {
    navBar,
    FrontPage,
    AppFooter
  }
}
</script>

<style>
</style>