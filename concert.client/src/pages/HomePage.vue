<template>
  <div class="container-fluid background-image">
    <div class="row justify-content-center">
      <div class="col-3">
        <i class="fa fa-glide-g fa-2x mt-4 ml-3" aria-hidden="true"></i>
      </div>
      <div class="col-6 text-center mt-4">
        <nav class="nav justify-content-center nav-stacked">
          <h6 class="nav-link text-dark hoverable active" href="#" @click="conferenceRoute">
            Conference
          </h6>
          <h6 class="nav-link text-dark active" href="#">
            -
          </h6>
          <h6 class="nav-link text-dark hoverable" href="#" @click="bookticketsRoute">
            Tickets
          </h6>
          <h6 class="nav-link text-dark active" href="#">
            -
          </h6>
          <h6 class="nav-link text-dark hoverable" href="#" @click="contactRoute">
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
        <h1> Celebrating 15 years of UX design in the USA </h1>
      </div>
      <div class="col-6">
      </div>
    </div>
    <div class="row justify-content-center mt-5">
      <div class="col-9  text-left">
        <h5> As a member you can take as many UX courses as you want free of charge </h5>
      </div>
      <div class="col-9 ml-4 mt-4">
        <div class="row">
          <button class="btn btn-dark text-light rounded-button" @click="bookticketsRoute">
            Book Tickets
          </button>
          <h6 class=" text-dark mt-2 ml-3 button-transform" @click="ourServicesRoute">
            Our Services
          </h6>
        </div>
      </div>
      <div class="col-5">
      </div>
    </div>
    <div class="row justify-content-end mt-5">
      <div class="col-8">
        <div class="row justify-content-center">
          <div class="col-4 card bg-light border-rounded shadow-lg position-card">
            <div class="row">
              <div class="col-9">
                <h5 class="m-2">
                  Award Ceremony
                </h5>
              </div>
              <div class="col-3 text-right">
                <h6><i class="fa fa-toggle-on text-secondary fa-2x m-2" aria-hidden="true"></i></h6>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-12">
                <h6 class="ml-2 pb-2 text-danger">
                  12:45 - 1:00
                </h6>
              </div>
              <div class="col-11 pb-3">
                <button class="btn btn-dark mr-1 rounded-button">
                  Team
                </button>
                <button class="btn btn-outline-secondary ml-1 rounded-button">
                  Meeting
                </button>
              </div>
              <div class="col-12 pb-2">
                <div class="row">
                  <div class="col-6">
                    <i class="fa fa-user-circle-o fa-2x m-1" aria-hidden="true"></i>
                    <i class="fa fa-user-circle-o fa-2x m-1" aria-hidden="true"></i>
                    <i class="fa fa-user-circle-o fa-2x m-1" aria-hidden="true"></i>
                  </div>
                  <div class="col-6 text-right">
                    <i class="fa fa-pencil-square-o m-1 p-1 text-secondary fa-2x" aria-hidden="true"></i>
                    <i class="fa fa-arrow-circle-o-up m-1 p-1 text-danger fa-2x" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AuthService } from '../services/AuthService'
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'Home',
  setup() {
    const router = useRouter()
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
      },
      async bookticketsRoute() {
        router.push({ name: 'BookTickets' })
      },
      async ourServicesRoute() {
        router.push({ name: 'OurServicesPage' })
      },
      async contactRoute() {
        router.push({ name: 'Contact' })
      },
      async conferenceRoute() {
        router.push({ name: 'Conference' })
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
.border-rounded{
  border-radius: .5rem;
}
.margin-from-top{
  margin-top: 15rem;
}
.button-transform:hover{
  cursor: pointer;
}
@media (min-width: 1200px) {
  .position-card{
    position: absolute;
    bottom: 0vh;
  }
}
</style>
