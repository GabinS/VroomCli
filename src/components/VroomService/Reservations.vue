<template>
  <div>
    <h1 class="text-center">Vos Réservations</h1>
    <div class="customlist col-12">
            <div class="item row border rounded border-alert-dark p-3 mt-4" v-for="booking in bookings" :key="booking.id">
                <div class="col-md-2">{{booking.car.Name}}</div>
                <div class="col-md-1">{{booking.car.PlaceNb}} places</div>
                <div class="col-md-2">{{booking.car.Price/100}}€/heure</div>
                <div class="col-md-2">{{booking.StartDate}}</div>
                <div class="col-md-2">{{booking.EndDate}}</div>
                <div class="col-md-1">{{booking.Total/100}}€</div>
                <div class="col-md-2 text-center">{{booking.State}}</div>
            </div>
        </div>
        <div class="col-md-2 text-center">{{test}}</div>
  </div>
</template>

<script>
import axios from 'axios'
const parseString = require('xml2js').parseString;

export default {
  name: 'Reservations',
  data: () => {
    return {
      bookings: [],
      users: [],
      test: "",
      id :1,
    
    }
  },
  methods: {
    // On récupère le numéro d'identification de l'utilisateur.
    getIdUser: function() {
          var vm = this
            axios.get('http://localhost:52066/VroomService.asmx/GetUserById').then(response => {
                parseString(response.data, (err, result) => {
                    vm.users = result.ArrayofUser.User
                });
            })
            .catch(error => {
                vm.test = error
            });
        },/*
        // On affiche la liste des réservations pour l'utilisateur connecté.
        postBookings: function() {
          // TODO : récupérer l'id de l'utilisateur.
            var vm = this
            axios.post('http://localhost:52066/VroomService.asmx/GetListBooking').then(response => {
                parseString(response.data, (err, result) => {
                    vm.bookings = result.ArrayOfBooking.Booking
                });
            })
            .catch(error => {
                vm.test = error
            });
        },*/
        
        cancelBookings: function() {
          // TODO : récupérer l'id de l'utilisateur.
            var vm = this
            axios.post('http://localhost:52066/VroomService.asmx/GetListBooking', {user_id : vm.id}).then(response => {
                parseString(response.data, (err, result) => {
                    vm.bookings = result.ArrayOfBooking.Booking
                    // vm.users = result.ArrayOfUsers.User
                });
            })
            .catch(error => {
                vm.test = error
            });
        }
    },
    mounted: function() {
       // this.getIdUser(),
       // this.postBookings(),
        this.cancelBookings()
    }

}
</script>
