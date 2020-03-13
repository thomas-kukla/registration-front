<template>
  <div>
    <nav role="navigation" class="navbar navbar-expand-lg navbar-dark">
      <router-link class="navbar-brand" to="/">
          <img src="@/assets/Orange-emblem.jpg" alt="Back to homepage" title="Back to homepage" width="auto" height="50">
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{
              name: 'registration'
              }" class="nav-link">Registration</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{
              name: 'process'
              }" 
              class="nav-link">Process</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
