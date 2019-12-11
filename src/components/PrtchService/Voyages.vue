<template>
    <div>
        <div class="customlist col-12">
            <div class="item row border rounded border-alert-dark p-3 mt-4" v-for="voyage in voyages" :key="voyage.Id[0]">
                <div class="col-md-3">{{voyage.Name[0]}}</div>
                <div class="col-md-3">{{voyage.Description[0]}}</div>
                <div class="col-md-2">
                    <span class="float-right">{{voyage.Price[0]/100}}€</span>
                </div>
                <div class="col-md-1">
                    <button class="btn btn-outline-secondary float-right" data-toggle="modal" data-target="#ReservationModal" @click="selected_voyage = voyage">Réserver</button>
                </div>
            </div>
        </div>
        <reservation-modal />
    </div>
</template>

<script>
import axios from 'axios'
axios.defaults.baseURL = 'http://192.168.214.62:5001/external/voyages'

export default {
    name: 'Voyages',
    data: () => {
        return {
            error: '',
            voyages: [],
            voyages_sort: [],
            selected_voyage: ''
        }
    },
    methods: {
        getTravels() {
            var vm = this
            axios.get().then(function (response) {
                vm.voyages = response
            })
            .catch(function (error) {
                vm.error = error
            });
        }
    },
    mounted() {
        this.getTravels()
    }
}
</script>