import { defineStore } from "pinia";
import axios from "@/lib/axios";

export const useUserStore = defineStore("userStore", {
    state: () => {
        return {
            isLoading: false,
            serverResponse: null
        }
    },
    actions: {
        register(form: Object, serverErrors: any) {
            this.isLoading = true

            axios.post('/v1/platform/open/create', form)
                .then(response => {
                    this.serverResponse = response.data.info.platform
                })
                .catch(error => {
                    serverErrors = error.response
                })
                .then(() => {
                    this.isLoading = false
                })
        },
    }
})