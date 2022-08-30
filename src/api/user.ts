import axios from 'axios'
import type { UserState } from '~/types/user'

export interface LoginData {
    username: string
    password: string
}

export interface LoginRes {
    token: string
}

export function login(data: LoginData) {
    return axios.post<LoginRes>('/user/login', data)
}

export function getUserInfo(token: string | null) {
    return axios.post<UserState>('/user/info', { token })
}

export function logout() {
    return axios.post<LoginRes>('/user/logout')
}
