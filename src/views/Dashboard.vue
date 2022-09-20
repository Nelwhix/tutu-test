<script setup lang="ts">
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore()
const serverResponse = userStore.serverResponse
</script>

<template>
    <h2>User logged in successfully</h2>
    <div v-if="serverResponse">

    </div>
</template>