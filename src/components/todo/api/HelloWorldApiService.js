import axios from 'axios'

const apiClient = axios.create(
    {
        baseURL:'http://localhost:8080'
    }
)

export const retrieveHelloWorldBean 
    = () => apiClient.get('/hello-world')


//Response to preflight request doesn't pass access control check => Authorization header
export const retrieveHelloWorldPathVariable
    = (username)  => apiClient.get(`/hello-world/path-variable/${username}`, {
        headers: {
            Authorization: 'Basic aXJmYW46UEBzc3cwcmQ='
        }
    })

 // Example assuming apiClient has baseURL configured
export const executeBasicAuthenticationService = (token) => apiClient.get(`/basicauth`, {
    headers: {
        Authorization: token
    }
});
