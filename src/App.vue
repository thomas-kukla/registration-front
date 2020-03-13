<template>
  <div id="app">
      <navbar /> 
      <transition name="fade" mode="out-in">
      <router-view :key="$route.path"/>
      </transition>
  </div>
</template>

<script>

import Navbar from "@/components/Navbar"

export default {
  components: {
      Navbar
  }
}
</script>

<style lang="scss">
@import "../node_modules/boosted/scss/boosted.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to{
  opacity: 0;
}
</style>
