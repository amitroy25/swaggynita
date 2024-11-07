import axios, { AxiosResponse } from "axios";


axios.defaults.baseURL ='https://localhost:8081/api'

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
               get: (url: string) => axios.get(url).then(responseBody),
               post: (url: string, body: object) => axios.post(url,body).then(responseBody),
               put:  (url: string, body: object) => axios.put(url,body).then(responseBody),
               delete: (url: string) => axios.delete(url).then(responseBody)

                 }

                 const Store={
                     list: () => requests.get('products'),
                     get:(id: number) => requests.get(`products/${id}`)

                 }

                 const agent = {
                           Store
                 }

                 export default agent;