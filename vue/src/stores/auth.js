import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import axios from 'axios'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const user = ref({
      authenticated: false,
      userInfo: {}
    })

    const authenticatedStatus = computed(() => user.value.authenticated)
    const authenticatedUserInfo = computed(() => user.value.userInfo)

    /**
     * authenticating the user
     * @param {Object} data
     */
    const handleLogin = async (data) => {
      await axios.get('/sanctum/csrf-cookie')
      await axios.post('/login', data)
      await authenticatedUser()
    }

    /**
     * registering user
     * @param {Object} data
     */
    const handleRegistration = async (data) => {
      await axios.get('/sanctum/csrf-cookie')
      await axios.post('/register', data)
      await authenticatedUser()
    }

    /**
     * autheticated user
     */
    const authenticatedUser = async () => {
      await axios
        .get('/api/user')
        .then((response) => {
          user.value.authenticated = true
          user.value.userInfo = response.data.data
        })
        .catch(() => {
          user.value.authenticated = false
          user.value.userInfo = {}
        })
    }

    const logout = async () => {
      await axios
        .post('/logout')
        .then(() => {
          user.value.authenticated = false
          user.value.userInfo = {}
          window.location.replace('/login')
        })
        .catch((error) => {
          console.error(error)
        })
    }

    return {
      user,
      authenticatedStatus,
      authenticatedUserInfo,
      handleLogin,
      handleRegistration,
      authenticatedUser,
      logout
    }
  },
  {
    persist: {
      storage: localStorage,
      paths: ['user.authenticated']
    }
  }
)
