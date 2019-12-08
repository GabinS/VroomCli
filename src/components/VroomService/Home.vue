<template>
    <div>
        <top-menu />
        <div class="content py-4">
            <router-view/>
        </div>
    </div>
</template>

<script>
import TopMenu from '@/components/VroomService/TopMenu'

export default {
    name: 'VroomService',
    components: { TopMenu }
}
</script>