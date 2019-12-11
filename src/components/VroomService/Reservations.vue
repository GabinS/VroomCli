<template>
  <div>
    <div class="customlist col-12">
      <div class="item row border rounded border-alert-dark p-3 mt-4">
          <div class="col-md-2">Nom du véhicule</div>
          <div class="col-md-2">Nombre de place</div>
          <div class="col-md-2">Coût</div>
          <div class="col-md-3">Durée de la réservation</div>
          <div class="col-md-1">Total</div>
      </div>
      <div class="item row border rounded border-alert-dark p-3 mt-4" v-for="booking in bookings" :key="booking.id">
          <div class="col-md-2">{{booking.Car[0].Name[0]}}</div>
          <div class="col-md-2">{{booking.Car[0].PlaceNb[0]}} places</div>
          <div class="col-md-2">{{booking.Car[0].Price[0]/100}}€/jour</div>
          <div class="col-md-3">Du {{booking.StartDate[0]}} au {{booking.EndDate[0]}}</div><!-- TODO formater la date (enlever l'heure) -->
          <div class="col-md-1">{{GetTotal(booking)}}€</div>
          <div class="col-md-2 text-center">{{booking.State[0]}}</div>
      </div>
    </div>
    <div class="col-md-2 text-center">{{test}}</div>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.baseURL = 'http://192.168.43.240:52066/VroomService.asmx/'
const parseString = require('xml2js').parseString
const querystring = require('querystring')

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
    // * On récupère le numéro d'identification de l'utilisateur.
    getIdUser() {
      var vm = this
        axios.get('GetUserById').then(response => {
            parseString(response.data, (err, result) => {
                vm.users = result.ArrayofUser.User
            });
        })
        .catch(error => {
            vm.test = error
        });
    },

    // * On affiche la liste des réservations pour l'utilisateur connecté.
    postBookings() {
      // TODO : récupérer l'id de l'utilisateur.
        var vm = this
        axios.post('GetListBooking', querystring.stringify({ user_id: '1'})).then(response => {
            parseString(response.data, (err, result) => {
                vm.bookings = result.ArrayOfBooking.Booking
            });
        })
        .catch(error => {
            vm.test = error
        });
    },

    cancelBookings() {
      // TODO : récupérer l'id de l'utilisateur.
        var vm = this
        axios.post('GetListBooking').then(response => {
            parseString(response.data, (err, result) => {
                vm.bookings = result.ArrayOfBooking.Booking
                vm.test = result
            });
        })
        .catch(error => {
            vm.test = error
        });
    },

    GetTotal(/*booking*/) {
      // TODO retourner le total
    }
  },
  mounted: function() {
      // this.getIdUser(),
    this.postBookings()
      //this.cancelBookings()
  }
}
</script>
