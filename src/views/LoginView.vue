<script setup lang="ts">
import { ref } from 'vue';
import { reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

const state = reactive({
    email: '',
    password: '',
})

const rules = {
    email: { required, email },
    password: {required}
}

const v$ = useVuelidate(rules, state)

const showPassword = ref(false)

const toggleShow = () => {
    showPassword.value = !showPassword.value
}

const login = async () => {
    const result = await v$.value.$validate();

    if (result) {
        alert("sucess, form submitted!")
    } else {
        alert("error, form not submitted")
    }
}
</script>

<template>
    <main class="text-center h-screen absolute w-full inset-y-0 bg-gradient-to-r from-[#3742d0] to-[#1f2895]">
        <div class="text-white mb-4 mt-14 md:mt-20 grid justify-center">
            <img class="w-36" src="../assets/tutulogo.svg" alt="tutologo">
        </div>
        <span class="text-white">Welcome to tutu - wallets for all</span>
        <div class="grid justify-center">
            <form @submit.prevent="login" class="mt-4 py-10 px-10 bg-white w-[80vw] md:w-[40vw] rounded-lg drop-shadow-lg">
            <div class="flex flex-col">
                <label for="login" class="text-start">Login</label>
                <input v-model="state.email" type="email" id="login" placeholder="Enter email or plid" class="focus:outline focus:outline-[3px] border rounded-md pl-3 py-3 mt-2 focus:border-blue-100 focus:outline-blue-200 focus:bg-gray-100">
                <span v-if="v$.email.$error" class="text-red-400">{{ v$.email.$errors[0].$message }}</span>
            </div>
            <div class="flex flex-col mt-5 relative">
                <label for="pwd" class="text-start">Password</label>
                <input v-model="state.password" v-if="showPassword" type="text" id="pwd" placeholder="Enter Password" class="focus:outline focus:outline-[3px] border rounded-md pl-3 py-3 mt-2 focus:border-blue-100 focus:outline-blue-200 focus:bg-gray-100"/>
                <input v-model="state.password" v-else type="password" id="pwd" placeholder="Enter Password" class="focus:outline focus:outline-[3px] border rounded-md pl-3 py-3 mt-2 focus:border-blue-100 focus:outline-blue-200 focus:bg-gray-100"/>
                <button @click.prevent="toggleShow" class="absolute right-2 top-12">
                    <svg v-if="showPassword" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path fill="currentColor" d="M325.1 351.5L225.8 273.6c8.303 44.56 47.26 78.37 94.22 78.37C321.8 352 323.4 351.6 325.1 351.5zM320 400c-79.5 0-144-64.52-144-143.1c0-6.789 1.09-13.28 1.1-19.82L81.28 160.4c-17.77 23.75-33.27 50.04-45.81 78.59C33.56 243.4 31.1 251 31.1 256c0 4.977 1.563 12.6 3.469 17.03c54.25 123.4 161.6 206.1 284.5 206.1c45.46 0 88.77-11.49 128.1-32.14l-74.5-58.4C356.1 396.1 338.1 400 320 400zM630.8 469.1l-103.5-81.11c31.37-31.96 57.77-70.75 77.21-114.1c1.906-4.43 3.469-12.07 3.469-17.03c0-4.976-1.562-12.6-3.469-17.03c-54.25-123.4-161.6-206.1-284.5-206.1c-62.69 0-121.2 21.94-170.8 59.62L38.81 5.116C34.41 1.679 29.19 0 24.03 0C16.91 0 9.839 3.158 5.121 9.189c-8.187 10.44-6.37 25.53 4.068 33.7l591.1 463.1c10.5 8.203 25.57 6.333 33.69-4.073C643.1 492.4 641.2 477.3 630.8 469.1zM463.1 256c0 24.85-6.705 47.98-17.95 68.27l-38.55-30.23c5.24-11.68 8.495-24.42 8.495-38.08c0-52.1-43-96-95.1-96c-2.301 .0293-5.575 .4436-8.461 .7658C316.8 170 319.1 180.6 319.1 192c0 10.17-2.561 19.67-6.821 28.16L223.6 149.9c25.46-23.38 59.12-37.93 96.42-37.93C399.5 112 463.1 176.6 463.1 256z"></path></svg>
                    <svg v-else class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M572.5 238.1C518.3 115.5 410.9 32 288 32S57.69 115.6 3.469 238.1C1.563 243.4 0 251 0 256c0 4.977 1.562 12.6 3.469 17.03C57.72 396.5 165.1 480 288 480s230.3-83.58 284.5-206.1C574.4 268.6 576 260.1 576 256C576 251 574.4 243.4 572.5 238.1zM432 256c0 79.45-64.47 144-143.9 144C208.6 400 144 335.5 144 256S208.5 112 288 112S432 176.5 432 256zM288 160C285.7 160 282.4 160.4 279.5 160.8C284.8 170 288 180.6 288 192c0 35.35-28.65 64-64 64C212.6 256 201.1 252.7 192.7 247.5C192.4 250.5 192 253.6 192 256c0 52.1 43 96 96 96s96-42.99 96-95.99S340.1 160 288 160z"></path></svg>
                </button>
                <span v-if="v$.password.$error" class="text-red-400">{{ v$.password.$errors[0].$message }}</span>
            </div>
            <router-link to="#" class="block text-start mt-4 text-[#3742d0]">Forgot Password?</router-link>
            <button type="submit" class="mb-8 rounded-md block text-white bg-[#1f2895] w-full py-3 mt-8">LOGIN</button>
            <span >Not registered yet?<router-link :to="{name: 'signup'}" class="text-[#3742d0]"> Signup</router-link></span>
        </form>
        <img src="../assets/formeffect.svg">
        </div>
    </main>
</template>