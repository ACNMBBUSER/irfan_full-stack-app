import { useContext } from "react";
import { createContext, useState } from "react";

//1. Create a Context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

// const authContext = useContext(AuthContext)


//2: Share the created context with other componenets

export default function AuthProvider({ children}) {

    const [number] = useState(10)

    const [isAuthenticated, setAuthenticated] = useState(false)

    const [username, setUsername] = useState(null)

    function login(username, password) {
        if(username==='irfan' && password==='password') {
            setAuthenticated(true)
            setUsername(username)
            return true
        }else {
            setAuthenticated(false)
            setUsername(null)
            return false
        }

    }

    function logout() {
        setAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={ {number, isAuthenticated, login, logout, username} }>
            {children}
        </AuthContext.Provider>
    )
}