export const successResponseWrap = (data: unknown) => {
    return {
        data,
        message: '请求成功',
        code: 1,
    }
}

export const failResponseWrap = (data: unknown, message: string, code = 0) => {
    return {
        data,
        message,
        code,
    }
}
