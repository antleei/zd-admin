import type { MockMethod } from 'vite-plugin-mock'
import type { MockParams } from '~/types/mock'
import { failResponseWrap, successResponseWrap } from '~/utils/mock-response'

export default [
    {
        url: '/user/login',
        method: 'post',
        response: ({ body }: MockParams<{ username: string; password: string }>) => {
            const { username, password } = body
            if (!username)
                return failResponseWrap(null, '用户名不能为空', 0)

            if (!password)
                return failResponseWrap(null, '密码不能为空', 0)

            if (username === 'admin' && password === 'admin') {
                return successResponseWrap({
                    token: '12345',
                })
            }
            if (username === 'user' && password === 'user') {
                return successResponseWrap({
                    token: '54321',
                })
            }

            return failResponseWrap(null, '用户名或者密码错误', 0)
        },
    },
    {
        url: '/user/info',
        method: 'post',
        response: ({ body }: MockParams<{ token: string }>) => {
            const { token } = body

            return successResponseWrap({
                name: '李宇杰',
                avatar: 'https://s3-imfile.feishucdn.com/static-resource/v1/v2_8cc14c74-8b8e-45e2-8707-0d51bb12c35g~?image_size=noop&cut_type=&quality=&format=image&sticker_format=.webp',
                role: token === '12345' ? 'admin' : 'user',
            })
        },
    },
    {
        url: '/user/logout',
        method: 'post',
        response: () => {
            return successResponseWrap(null)
        },
    },
] as MockMethod[]
