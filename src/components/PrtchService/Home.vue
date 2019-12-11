<template>
    <div>
        <top-menu />
        <div class="content py-4">
            <router-view/>
        </div>
    </div>
</template>

<script>
import TopMenu from '@/components/PrtchService/TopMenu'

export default {
    name: 'PrtchService',
    components: { TopMenu }
}
</script>