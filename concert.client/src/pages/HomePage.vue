<template>
  <div class="container-fluid background-image">
    <div class="row justify-content-center">
      <div class="col-3">
        <i class="fa fa-glide-g fa-2x mt-4 ml-3" aria-hidden="true"></i>
      </div>
      <div class="col-6 text-center mt-4">
        <nav class="nav justify-content-center nav-stacked">
          <h6 class="nav-link text-dark active" href="#">
            Conference
          </h6>
          <h6 class="nav-link text-dark active" href="#">
            -
          </h6>
          <h6 class="nav-link text-dark" href="#">
            Tickets
          </h6>
          <h6 class="nav-link text-dark active" href="#">
            -
          </h6>
          <h6 class="nav-link text-dark" href="#">
            Contact
          </h6>
        </nav>
      </div>
      <div class="col-3 text-right mt-4">
        <button
          class="btn btn-outline-dark mr-2 text-uppercase"
          @click="login"
          v-if="!user.isAuthenticated"
        >
          Login
        </button>
        <button
          class="btn btn-dark ml-2 text-uppercase rounded-button"
          @click="login"
          v-if="!user.isAuthenticated"
        >
          Register
        </button>

        <div class="dropdown" v-else>
          <div
            class="dropdown-toggle"
            @click="state.dropOpen = !state.dropOpen"
          >
            <img
              :src="user.picture"
              alt="user photo"
              height="40"
              class="rounded"
            />
            <span class="mx-3">{{ user.name }}</span>
          </div>
          <div
            class="dropdown-menu p-0 list-group w-100"
            :class="{ show: state.dropOpen }"
            @click="state.dropOpen = false"
          >
            <router-link :to="{ name: 'Account' }">
              <div class="list-group-item list-group-item-action hoverable">
                Account
              </div>
            </router-link>
            <div
              class="list-group-item list-group-item-action hoverable"
              @click="logout"
            >
              logout
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-4 text-center text-danger margin-from-top">
        <h5><i class="fa fa-align-center" aria-hidden="true"></i> UX EVENT 2021 </h5>
      </div>
    </div>
    <div class="row justify-content-center mt-5">
      <div class="col-3">
        <h1> Celebrating 15 years of UX in the USA </h1>
      </div>
      <div class="col-6">
      </div>
    </div>
    <div class="row justify-content-center mt-5">
      <div class="col-4">
        <h5> As a member you can take as many UX courses as you want free of charge </h5>
      </div>
      <div class="col-5">
      </div>
    </div>
  </div>
</template>

<script>
import { AuthService } from '../services/AuthService'
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'
export default {
  name: 'Home',
  setup() {
    const state = reactive({
      dropOpen: false
    })
    return {
      state,
      user: computed(() => AppState.user),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        await AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style scoped>
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.nav-link{
  text-transform: uppercase;
}
.nav-item .nav-link.router-link-exact-active{
  color: var(--primary);
}
.rounded-button{
  border-radius: 3rem;
}
.background-image{
  background-image: url("https://cdn.dribbble.com/users/1088422/screenshots/15320729/media/a76c816f2cb7e6ad4dd0f11fb6983cbd.png?compress=1&resize=400x300");
  background-size: cover;
  background-repeat: no-repeat;
}
.margin-from-top{
  margin-top: 15rem;
}
</style>
