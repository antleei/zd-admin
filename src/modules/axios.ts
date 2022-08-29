import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '~/store'

export interface HttpResponse<T = unknown> {
    code: number
    message: string
    data: T
}

if (import.meta.env.VITE_API_BASE_URL)
    axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL

// 请求拦截器
axios.interceptors.request.use((config: AxiosRequestConfig) => {
    // 请求携带token
    const token = localStorage.getItem('token')

    if (token) {
        if (!config.headers)
            config.headers = {}

        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, (error) => {
    return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use((response: AxiosResponse<HttpResponse>) => {
    const res = response.data

    if (res.code !== 1) {
        ElMessage.error(res.message || 'Error')

        // 1001: token失效
        if (res.code === 1001) {
            const userStore = useUserStore()

            userStore.logout()
        }
        return Promise.reject(new Error(res.message || 'Error'))
    }
    return res
}, (error) => {
    ElMessage.error(error.message || 'Request Error')
    return Promise.reject(error)
})
