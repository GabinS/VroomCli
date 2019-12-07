<template>
    <div class="menu row">
        <button-home class="col-md-2" />
        <div class="items col-md-8">
            <router-link :to="{name: ''}" class="item">Voitures</router-link>
            <router-link :to="{name: ''}" class="item">Mes réservations</router-link>
            <router-link :to="{name: ''}" class="item">Mon compte</router-link>
        </div>
    </div>
</template>

<script>
import ButtonHome from '@/components/ButtonHome'

export default {
    name: 'TopMenu',
    components: { ButtonHome }
}
</script>
