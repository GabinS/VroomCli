<template>
    <div class="row align-items-center min-vh-100">
        <div class="text-center w-100 msg-404">
            <p>Cette page n'existe pas</p>
            <router-link :to="{name: 'Home'}">
                <i class="fa fa-arrow-circle-left"></i>
                <span>Home</span>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Page404'
}
</script>