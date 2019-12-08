<template>
    <div class="menu row">
        <button-home class="col-md-2" />
        <div class="items col-md-8">
            <router-link :to="{name: 'Voitures'}" class="item">Les Voitures</router-link>
            <router-link :to="{name: 'Reservations'}" class="item">Mes réservations</router-link>
            <router-link :to="{name: 'Profil'}" class="item">Mon compte</router-link>
        </div>
        <router-link :to="{name: ''}" class="col-md-2">
        <div class="btn-home float-right clearfix">
            <i class="icon fa fa-power-off"></i>
        </div>
    </router-link>
    </div>
</template>

<script>
import ButtonHome from '@/components/ButtonHome'

export default {
    name: 'TopMenu',
    components: { ButtonHome }
}
</script>
