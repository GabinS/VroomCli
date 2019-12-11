<template>
    <div class="profil-form">
        <h1 class="text-center">Profil</h1>
    <div class="col-12 rounded mt-2">
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-4 col-form-label text-right">Pseudonyme</label>
    <div class="col-sm-8">
      <input type="text" class="form-control" v-model="user.Username">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-4 col-form-label text-right">Nom</label>
    <div class="col-sm-8">
      <input type="text" class="form-control" v-model="user.Lastname">
    </div>
  </div>
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-4 col-form-label text-right">Prénom</label>
    <div class="col-sm-8">
      <input type="text" class="form-control" v-model="user.Firstname">
    </div>
  </div>
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-4 col-form-label text-right">Nouveau mot de passe</label>
    <div class="col-sm-8">
      <input type="password" class="form-control" v-model="password" >

  </div>
      </div>
  </div>
  <div class="form-group row">
    <div style="margin: 0 auto">
      <button type="submit" class="btn btn-primary" @click="editAccount">Enregistrer</button>
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
  name: 'Profil',
  data: () => {
    return {
      user: [],
      error: "",
      id: 1,
      password: ""
    }
  },
  methods: {    
    // * On récupère le numéro d'identification de l'utilisateur.
    getIdUser() {
      var vm = this
        axios.get('GetAccount').then(response => {
            parseString(response.data, (err, result) => {
                vm.user = result.User
            });
        })
        .catch(error => {
            vm.error = error
        });
    }, 
    showAccount(){
      var vm = this
        axios.post('GetAccount', querystring.stringify({ id: '1'})).then(response => {
            parseString(response.data, (err, result) => {
                vm.user = result.User
            });
        })
        .catch(error => {
            vm.error = error
        });
    },
    editAccount(){
              var vm = this
        axios.post('EditAccount', querystring
        .stringify({ userId: vm.user.Id, username : vm.user.Username, firstname: vm.user.Firstname, lastname: vm.user.Lastname, password: vm.password}))
        .then(response => {
            parseString(response.data, (err, result) => {
                vm.user = result.User
            });
        })
        .catch(error => {
            vm.error = error
        });
    }
  
  },
  mounted: function() {
    this.showAccount()
    }
  }
  

</script>

