<template>
  <header>
  </header>
  <main>
    <router-view />
  </main>
  <footer>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
main{
  background-image: url("https://cdn.dribbble.com/users/1088422/screenshots/15320729/media/a76c816f2cb7e6ad4dd0f11fb6983cbd.png?compress=1&resize=400x300");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
