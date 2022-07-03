import axios, { AxiosError } from "axios"

const baseRequest = axios.create({
    baseURL: process.env.NEXT_PUBLIC_APP_API || "/api",
})

baseRequest.interceptors.request.use((config) => {
    const token = localStorage.getItem("auth")
    if (token) {
        // @ts-ignore
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

baseRequest.interceptors.response.use(
    (res) => res.data,
    (err: AxiosError) => {
        if (err.response?.data !== undefined) {
            // @ts-ignore
            if (err.response?.data?.msg !== undefined) {
                // @ts-ignore
                if(err.response.data?.msg === "recaptcha"){
                    return Promise.reject("Please try again.")
                }
                // @ts-ignore
                return Promise.reject(err.response?.data?.msg)
            }
        }
        if (err.message) {
            return Promise.reject(err.message)
        }
        return Promise.reject("Can't connect to server.")
    }
)

export default baseRequest

// for loop'