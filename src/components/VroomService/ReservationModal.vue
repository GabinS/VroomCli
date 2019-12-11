<template>
    <div class="modal fade" id="ReservationModal" tabindex="-1" role="dialog" aria-labelledby="ReservationModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{$parent.selected_car.Brand[0].Name[0]}} {{$parent.selected_car.Name[0]}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <!-- <div class="alert alert-success" role="alert" v-show="query_info !=''">
                        {{query_info}}
                    </div> -->
                    <div class="py-3 row">
                        <div class="col-4 text-right">
                            <label for="" class="m-0">Date de début</label>
                        </div>
                        <div class="col-8">
                            <input type="date" :min="Date() | formatDate" class="form-control" v-model="startdate">
                        </div>
                    </div>
                    <div class="py-3 row">
                        <div class="col-4 text-right">
                            <label for="" class="m-0">Date de fin</label>
                        </div>
                        <div class="col-8">
                            <input type="date" :min="Date() | formatDate" class="form-control" v-model="enddate">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="BookCar">Valider ma réservation</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
axios.defaults.baseURL = 'http://localhost:52066/VroomService.asmx/'
const parseString = require('xml2js').parseString
const querystring = require('querystring')

export default {
    name: 'ReservationModal',
    data: () => {
        return {
            startdate: '',
            enddate: '',

            user_id: 1,

            query_info: '',
            error: ''
        }
    },
    methods: {
        BookCar() {
            var vm = this
            if (this.startdate != '' && this.enddate != '') {
                axios.post('BookCar', querystring.stringify({ startdate: vm.startdate, enddate: vm.enddate, car_id: vm.$parent.selected_car.Id[0], user_id: vm.user_id})).then(response => {
                    parseString(response.data, (err, result) => {
                        vm.query_info = result.string
                    });
                    $('#ReservationModal').modal('hide')
                })
                .catch(error => {
                    vm.error = error
                });
            }
        }
    }
}
</script>