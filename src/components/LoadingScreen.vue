<script setup lang="ts">
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore()

</script>

<template>
    <div class="vld-parent">
      <loading v-model:active="userStore.isLoading" :is-full-page="true">
      </loading>
    </div>
  </template>