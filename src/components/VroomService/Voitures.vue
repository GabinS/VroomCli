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

        <div class="customlist">
            <div class="item row border rounded border-alert-dark p-3 mt-4" v-for="car in cars" :key="car.id">
                <div class="col-md-2">{{car.name}}</div>
                <div class="col-md-2">{{car.brand}}</div>
                <div class="col-md-4">{{car.description}}</div>
                <div class="col-md-2">
                    <span class="float-right">{{car.price/100}}€ / heure</span>
                </div>
                <div class="col-md-2">
                    <button class="btn btn-outline-secondary float-right">Réserver</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
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

            cars: [
                {
                    id: 0,
                    name: 'name',
                    brand: 'brand',
                    price: 2500,
                    description: 'description'
                },
                {
                    id: 1,
                    name: 'name 1',
                    brand: 'brand 1',
                    price: 3450,
                    description: 'description 1'
                }
            ]
        }
    }
}
</script>
