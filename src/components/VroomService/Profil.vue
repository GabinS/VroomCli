<template>
    <div>
        <h1 class="text-center">Profil</h1>
<form>
    <div class="col-12 rounded mt-2">
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Pseudonyme</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputEmail3" placeholder="Pseudonyme" >
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Nom</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputPassword3" placeholder="Nom">
    </div>
  </div>
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Prénom</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputPassword3" placeholder="Prénom">
    </div>
  </div>
    <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Mot de passe</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" placeholder="Mot de passe">

  </div>
      </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Enregistrer</button>
    </div>
  </div>
 
</form>
</div>

</template>

<script>
export default {
    name: 'Profil'
}
</script>
