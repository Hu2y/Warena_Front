<template>
  <div id="app">
    <nav-bar></nav-bar>
    <front-page></front-page>
    <app-footer></app-footer>
    <div>
      <i class="loader invisible"></i>
    </div>
    <user-list></user-list>
  </div>
</template>

<script>
import navBar from './components/navBar'
import AppFooter from './components/AppFooter'
import FrontPage from './view/FrontPage'
import userList from './components/userList'

export default {
  components: {
    navBar,
    FrontPage,
    AppFooter,
    userList
  }
}
</script>

<style>
</style>