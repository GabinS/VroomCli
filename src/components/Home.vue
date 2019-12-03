<template>
  <div class="container min-vh-100">
    <div class="row align-items-center min-vh-100">
      <div class="col-md-4 px-4 text-center" v-for="service in services" :key="service.id">
        <router-link :to="{name: 'Home'}" class="text-white text-decoration-none">
          <div class="bg-red p-5 rounded shadow-lg" :class="service.bgclass">
            <p class="h2">Service {{service.id}}</p>
            <p class="h3">{{service.name}}</p>
          </div>
        </router-link>
      </div>
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
          id: 1,
          name: 'Vroom Service',
          bgclass: 'bg-red',
          link: ''
        },
        {
          id: 2,
          name: '??? Service',
          bgclass: 'bg-blue',
          link: ''
        },
        {
          id: 3,
          name: '??? Service',
          bgclass: 'bg-green',
          link: ''
        }
      ]
    }
  }
}
</script>

<style>
  .container .bg-red {
    background-color: #e53935;
  }
  .container .bg-blue {
    background-color: #1E88E5;
  }
  .container .bg-green {
    background-color: #7CB342;
  }
</style>
