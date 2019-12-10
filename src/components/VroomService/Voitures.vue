<template>
    <div>
        <div class="form-group">
            <div class="col-12">
                <div class="input-group input-group-lg">
                    <input type="search" class="form-control" placeholder="Rechercher une voiture" @keyup.enter="search_cars" v-model="search">
                    <div class="input-group-append" @click="search_cars">
                        <span class="input-group-text"><i class="fa fa-search"></i></span>
                    </div>
                </div>
            </div>
            <div class="filters col-12 rounded mt-4">
                <div class="item selector input-group">
                    <label for="">Marques</label>
                    <select name="brands" class="custom-select" v-model="brand_selected_id" @change="sort_cars">
                        <option value="0" selected>Toutes</option>
                        <option :value="brand.Id[0]" v-for="brand in brands" :key="brand.id">{{brand.Name[0]}}</option>
                    </select>
                </div>
                <div class="item selector input-group">
                    <label for="">Nombre de places</label>
                    <select name="nbplaces" class="custom-select" v-model="nbplaces_selected_id" @change="sort_cars">
                        <option value="0" selected>N'importe</option>
                        <option :value="nbplace" v-for="nbplace in nbplaces" :key="nbplace">{{nbplace}}</option>
                    </select>
                </div>
                <div class="item">
                    <i class="fa fa-calendar mx-2"></i>
                    <label for="">Période</label>
                </div>
                <div class="item range form-group">
                    <label for="" class="d-block" @load="setPriceRange">Prix max : {{maxprice_selected}}€</label>
                    <span>{{minprice}}€</span>
                    <input type="range" :min="minprice" :max="maxprice" v-model="maxprice_selected" @change="sort_cars">
                    <span>{{maxprice}}€</span>
                </div>
            </div>
        </div>

        <div class="customlist col-12">
            <div class="item row border rounded border-alert-dark p-3 mt-4" v-for="car in cars_sort" :key="car.Id[0]">
                <div class="col-md-3">{{car.Name[0]}}</div>
                <div class="col-md-2">{{car.Brand[0].Name[0]}}</div>
                <div class="col-md-1">{{car.PlaceNb[0]}} places</div>
                <div class="col-md-3">{{car.Description[0]}}</div>
                <div class="col-md-2">
                    <span class="float-right">{{car.Price[0]/100}}€/jour</span>
                </div>
                <div class="col-md-1">
                    <button class="btn btn-outline-secondary float-right" @click="setPriceRange">Réserver</button>
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
            error: '',

            brands: [],
            brand_selected_id: 0,
            nbplaces: [],
            nbplaces_selected_id: 0,

            minprice: 0,
            maxprice: 0,
            maxprice_selected: 0,

            cars: [],
            cars_sort: []
        }
    },
    methods: {
        servicepath: () => 'http://192.168.1.12:52066/VroomService.asmx/',
        getCars() {
            var vm = this
            axios.post(vm.servicepath().concat('GetListCar')).then(response => {
                parseString(response.data, (err, result) => {
                    vm.cars = result.ArrayOfCar.Car
                    vm.cars_sort = result.ArrayOfCar.Car
                });
            })
            .catch(error => {
                vm.error = error
            });
        },
        getBrands() {
            var vm = this
            axios.post(vm.servicepath().concat('GetListBrand')).then(response => {
                parseString(response.data, (err, result) => {
                    vm.brands = result.ArrayOfBrand.Brand
                });
            })
            .catch(error => {
                vm.error = error
            });
        },
        getNbPlaces() {
            var vm = this
            axios.post(vm.servicepath().concat('GetListNbPlace')).then(response => {
                parseString(response.data, (err, result) => {
                    vm.nbplaces = result.ArrayOfInt.int
                });
            })
            .catch(error => {
                vm.error = error
            });
        },
        setPriceRange() {
            this.cars.forEach(c => {
                this.minprice = (this.minprice == 0 || c.Price[0]/100 < this.minprice) ? c.Price[0]/100 : this.minprice;
                this.maxprice = (this.maxprice == 0 || c.Price[0]/100 > this.maxprice) ? c.Price[0]/100 : this.maxprice;
            });
            this.maxprice_selected = this.maxprice;
        },

        sort_cars() {
            this.cars_sort = this.cars
            if (this.brand_selected_id != 0)
                this.cars_sort = this.cars_sort.filter(c => c.Brand[0].Id[0] == this.brand_selected_id)
            if (this.nbplaces_selected_id != 0)
                this.cars_sort = this.cars_sort.filter(c => c.PlaceNb[0] == this.nbplaces_selected_id)
            if (this.maxprice_selected != 0)
                this.cars_sort = this.cars_sort.filter(c => c.Price[0]/100 <= this.maxprice_selected)
            this.search_cars()
        },
        search_cars() {
            var cars_search = this.cars_sort
            this.cars_sort = cars_search.filter(c => c.Name[0].toLowerCase().includes(this.search.toLowerCase()) || c.Brand[0].Name[0].toLowerCase().includes(this.search.toLowerCase()))
        }

    },
    mounted: function() {
        this.getCars()
        this.getBrands()
        this.getNbPlaces()
    }
}
</script>
