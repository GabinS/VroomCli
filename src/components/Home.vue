<template>
  <div class="row align-items-center min-vh-100">
    <div class="col-md-4 px-4 text-center" v-for="service in services" :key="service.name">
      <router-link :to="{name: service.link}" class="text-decoration-none shadow-lg homecard">
        <div class="homecard-box">
          <div class="content-box">
            <div class="icon-img">
              <img :src="require('../assets/img/'+service.img)" alt="">
            </div>
            <p class="title">{{service.name}}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      services: [
        {
          name: 'Vroom Service',
          img: 'car.svg',
          link: 'VroomService'
        },
        {
          name: 'Prrrrrrtch Service',
          img: 'airplane.svg',
          link: 'PrtchService'
        },
        {
          name: 'Groom Service',
          img: 'bed.svg',
          link: ''
        }
      ]
    }
  }
}
</script>
