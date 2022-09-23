import { defineStore } from "pinia";
import axios from "@/lib/axios";

export const useUserStore = defineStore("userStore", {
    state: () => {
        return {
            isLoading: false,
            serverResponse: null as UserInfo | null,
        }
    },
    actions: {
        register(form: Object, serverErrors: any) {
            this.isLoading = true

            axios.post('/v1/platform/open/create', form)
                .then(response => {
                    console.log(response)
                    this.serverResponse = response.data.info
                    this.$router.push({name: 'dashboard'})
                })
                .catch(error => {
                    console.log(error)
                    serverErrors = error.response
                })
                .then(() => {
                    this.isLoading = false
                })
        },

        login(form: Object) {
            this.isLoading = true

            axios.post('/v1/platform/open/login', form)
                .then(response => {
                    this.serverResponse = response.data.info
                    this.$router.push({name: 'dashboard'})
                })
                .catch(error => {
                    console.log(error)
                })
                .then(() => {
                    this.isLoading = false
                })
        },
    }
})

interface UserInfo {
    token: string
    expire: string
    platform: {
        plid: string
        description: string
        domain: string
        email: string
    }
}