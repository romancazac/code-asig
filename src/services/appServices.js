import { BASE_URL } from "../constants"
import { useHttp } from "../hooks/http.hook"

export const useAppServices = () => {


    const { request, error, loading, succes } = useHttp()

    const getData = () => {
        return request(`${BASE_URL}/data`)
    }

    const postComand = (body) => {
        return request(`${BASE_URL}/comands`,"POST",body)
    }
    const postConsult = (body) => {
        return request(`${BASE_URL}/consult`,"POST",body)
    }

    return { error, loading, succes, getData,postComand,postConsult}
}