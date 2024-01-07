import { apiClient } from './ApiClient';

export const retrieveHelloWorldBean 
    = () => apiClient.get('/hello-world')


//Response to preflight request doesn't pass access control check => Authorization header
export const retrieveHelloWorldPathVariable
    = (username, token)  => apiClient.get(`/hello-world/path-variable/${username}`
    // , {
    //     headers: {
    //         Authorization: token
    //     }
    // }
    )


