<template>
  <div>
    <nav role="navigation" class="navbar navbar-expand-lg navbar-dark">
      <router-link class="navbar-brand" to="/">
          <img class="ml-2" src="@/assets/Orange_logo.svg.png" alt="Back to homepage" title="Back to homepage" width="100%" height="auto">
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
              name: 'processes'
              }" 
              class="nav-link">Processes</router-link>
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