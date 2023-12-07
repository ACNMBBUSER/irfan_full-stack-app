import {useParams, Link} from 'react-router-dom'
import { useState } from 'react'
import { retrieveHelloWorldPathVariable } from './api/HelloWorldApiService'


function WelcomeComponent () {

    const {username} = useParams()

    const [message,setMessage] = useState(null)

    function callHelloWorldRestApi(){
        console.log('called')

        retrieveHelloWorldPathVariable('irfan')
        .then((response) => successfulResponse(response))
        .catch((error) => errorResponse(error))
        .finally(() => console.log('cleanup'))
    }
    
    function successfulResponse(response) {
        console.log(response)
        setMessage(response.data)
    }

    function errorResponse(error) {
        console.log(error)
    }
    
    return (
        <div className="WelcomeComponent">
          <h1>Welcome {username}</h1>
          <div>
            Manage Your todos - <Link to="/todos">Go Here</Link>
          </div>
          <div>
            <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>
              Call Hello World REST API
            </button>
          </div>
          <div className="text-info">{message && message.message}</div>
        </div>
      );
}

export default WelcomeComponent