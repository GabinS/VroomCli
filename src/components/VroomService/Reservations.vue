<template>
  <div>
    <div class="customlist col-12">
      <div class="item row border rounded border-alert-dark p-3 mt-4">
          <div class="col-md-2">Nom du véhicule</div>
          <div class="col-md-2">Nombre de places</div>
          <div class="col-md-2">Coût</div>
          <div class="col-md-3">Durée de la réservation</div>
          <div class="col-md-1">Total</div>
          <div class="col-md-1 text-center">Statut</div>
      </div>
      <div class="item row border rounded border-alert-dark p-3 mt-4" v-for="booking in bookings" :key="booking.id">
          <div class="col-md-2">{{booking.Car[0].Name[0]}}</div>
          <div class="col-md-2">{{booking.Car[0].PlaceNb[0]}} places</div>
          <div class="col-md-2">{{booking.Car[0].Price[0]/100}}€/jour</div>
          <div class="col-md-3">Du {{booking.StartDate[0] | formatDate}} au {{booking.EndDate[0] | formatDate}}</div>
          <div class="col-md-1">{{getTotal(booking)/100}}€</div>
          <div class="col-md-2 text-center">{{booking.State[0]}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:52066/VroomService.asmx/'
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
      nbJr: ""
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
    // * On récupère le numéro d'identification de la réservation.
    getIdBooking() {
      var vm = this
        axios.get('GetBookingById').then(response => {
            parseString(response.data, (err, result) => {
                vm.bookings = result.ArrayofBooking.Booking
            });
        })
        .catch(error => {
            vm.test = error
        });
    },

    // * On affiche la liste des réservations pour l'utilisateur connecté.
    postBookings() {
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
        var vm = this
        axios.post('CancelBookingById', querystring.stringify({ id: vm.bookings.getIdBooking})).then(response => {
            parseString(response.data, (err, result) => {
                vm.bookings = result.ArrayOfBooking.Booking
                vm.test = result
            });
        })
        .catch(error => {
            vm.test = error
        });
    },
    // Retourne le montant total de la réservation.
    getTotal(booking) {
      var vm = this
      var nbSec = 0
      var nbJour = 0

      try {

          nbSec = Date.parse(booking.EndDate[0])- Date.parse(booking.StartDate[0])
          nbJour = Math.round(nbSec / (1000*60*60*24)) +1

        return nbJour * booking.Car[0].Price[0]

      } catch (error) {
        vm.test = error
      }
    }
  },
  mounted: function() {
    this.postBookings()
  }
}
</script>
