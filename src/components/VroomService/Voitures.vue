<template>
    <div>
        <div class="form-group">
            <div class="col-12">
                <div class="input-group input-group-lg">
                    <input type="search" class="form-control" placeholder="Rechercher une voiture" v-model="search">
                    <div class="input-group-append">
                        <span class="input-group-text"><i class="fa fa-search"></i></span>
                    </div>
                </div>
            </div>
            <div class="filters col-12 rounded mt-4">
                <div class="item selector input-group">
                    <label for="">Marques</label>
                    <select name="brands" class="custom-select">
                        <option value="" selected disabled hidden>Choisir</option>
                        <option :value="brand.id" v-for="brand in brands" :key="brand.id">{{brand.name}}</option>
                    </select>
                </div>
                <div class="item selector input-group">
                    <label for="">Nombre de places</label>
                    <select name="nbplaces" class="custom-select">
                        <option value="" selected disabled hidden>Choisir</option>
                        <option :value="nbplace" v-for="nbplace in nbplaces" :key="nbplace">{{nbplace}}</option>
                    </select>
                </div>
                <div class="item">
                    <i class="fa fa-calendar mx-2"></i>
                    <label for="">Période</label>
                </div>
                <div class="item range form-group">
                    <label for="" class="d-block">Prix max : {{maxprice_selected}}€</label>
                    <span>{{minprice}}€</span>
                    <input type="range" :min="minprice" :max="maxprice" v-model="maxprice_selected">
                    <span>{{maxprice}}€</span>
                </div>
            </div>
        </div>

        <div class="customlist col-12">
            <div class="item row border rounded border-alert-dark p-3 mt-4" v-for="car in cars" :key="car.Id[0]">
                <div class="col-md-2">{{car.Name[0]}}</div>
                <div class="col-md-2">{{car.Brand[0].Name[0]}}</div>
                <div class="col-md-1">{{car.PlaceNb[0]}} places</div>
                <div class="col-md-4">{{car.Description[0]}}</div>
                <div class="col-md-2">
                    <span class="float-right">{{car.Price[0]/100}}€/heure</span>
                </div>
                <div class="col-md-1">
                    <button class="btn btn-outline-secondary float-right" @click="getCars">Réserver</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
const parseString = require('xml2js').parseString;

export default {
    name: 'Voitures',
    data: () => {
        return {
            search: '',

            brands: [],
            nbplaces: [],

            minprice: 0,
            maxprice: 120,
            maxprice_selected: 120,

            cars: []
        }
    },
    methods: {
        getCars: function() {
            var vm = this
            axios.post('http://192.168.43.241:52066/VroomService.asmx/GetListCar').then(response => {
                parseString(response.data, (err, result) => {
                    vm.cars = result.ArrayOfCar.Car
                });
            })
            .catch(error => {
                vm.test = error
            });
        }
    },
    mounted: function() {
        this.getCars()
    }
}
</script>
