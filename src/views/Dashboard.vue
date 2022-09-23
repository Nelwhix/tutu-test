<script setup lang="ts">
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore()

</script>

<template>
    <main class="p-5">
        <h2>User logged in successfully</h2>
        <div>
            <div v-if="userStore.serverResponse.token">
                <p>token: {{userStore.serverResponse.token}}</p>
                <p>expires in: {{userStore.serverResponse.expire}}</p>
            </div>
            <p>plid: {{userStore.serverResponse.platform.plid}}</p>
            <p>description: {{userStore.serverResponse.platform.description}}</p>
            <p>email: {{userStore.serverResponse.platform.email}}</p>
            <p>domain: {{userStore.serverResponse.platform.domain}}</p>
        </div>
    </main> 
</template>