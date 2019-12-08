<template>
  <div>
    <h1 class="text-center">Vos Réservations</h1>
    <div class="customlist col-12">
            <div class="item row border rounded border-alert-dark p-3 mt-4" v-for="booking in bookings" :key="booking.id">
                <div class="col-md-2">{{booking.car.name}}</div>
                <div class="col-md-1">{{booking.car.nbplace}} places</div>
                <div class="col-md-2">{{booking.car.price/100}}€/heure</div>
                <div class="col-md-2">{{booking.start_date}}</div>
                <div class="col-md-2">{{booking.end_date}}</div>
                <div class="col-md-1">{{booking.total/100}}€</div>
                <div class="col-md-2 text-center">{{booking.state}}</div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'Reservations',
  data: () => {
    return {
      bookings: [
        {
          id: 0,
          car: {
            name: 'name car',
            nbplace: 2,
            price: 3500
          },
          start_date: '9/12/2019 9:00:00',
          end_date: '9/12/2019 18:00:00',
          total: 31500,
          state: 'En cours'
        },
        {
          id: 0,
          car: {
            name: 'name 2 car',
            nbplace: 2,
            price: 2700
          },
          start_date: '9/12/2019 10:00:00',
          end_date: '9/12/2019 11:00:00',
          total: 5400,
          state: 'Terminée'
        }
      ]
    }
  }
}
</script>
