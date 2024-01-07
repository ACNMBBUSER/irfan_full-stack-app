import { apiClient } from "./ApiClient";

 // Example assuming apiClient has baseURL configured
 export const executeBasicAuthenticationService = (token) => apiClient.get(`/basicauth`, {
    headers: {
        Authorization: token
    }
});

export const executeJwtAuthenticationService = (username,password) => apiClient.post(`/authenticate`, {
   username, password
});