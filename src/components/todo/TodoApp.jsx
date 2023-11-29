import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import './TodoApp.css'
import LogoutComponent from './LogoutComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import ListTodosComponent from './ListToDosComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'
import AuthProvider, { useAuth } from './security/AuthContext'


function AuthenticatedRoute({children}) {
    const authContext = useAuth()
    if(authContext.isAuthenticated)
    return children

    return <Navigate to="/"/>
}



export default function TodoApp() {
    return(
        <div className="TodoApp">
        <AuthProvider>   
            <BrowserRouter>
            <HeaderComponent> </HeaderComponent>
                <Routes>
                    <Route path='/' element={<LoginComponent></LoginComponent>}></Route>
                    <Route path='/login' element={<LoginComponent></LoginComponent>}></Route>
                    <Route path='/welcome/:username' element={
                        <AuthenticatedRoute>
                                <WelcomeComponent></WelcomeComponent> 
                         </AuthenticatedRoute>
                    }></Route>
                    <Route path='/todos' element={
                        <AuthenticatedRoute>
                                <ListTodosComponent></ListTodosComponent> 
                        </AuthenticatedRoute>
                    }></Route>
                    <Route path='/logout' element={
                         <AuthenticatedRoute>
                               <LogoutComponent></LogoutComponent> 
                         </AuthenticatedRoute>
                    }></Route>

                    <Route path='*' element={<ErrorComponent></ErrorComponent> }></Route>
               
                </Routes>   
                <FooterComponent></FooterComponent> 
            </BrowserRouter>
        </AuthProvider>     
           {/* <WelcomeComponent></WelcomeComponent> */}
        </div>
    )
}














