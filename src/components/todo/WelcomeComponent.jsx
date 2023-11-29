import {useParams, Link} from 'react-router-dom'


function WelcomeComponent () {

    const {username} = useParams()

    function callHelloWorldRestApi(){
        console.log('called')
    }
    
    return(
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>
                Manage Your todos - <Link to="/todos">Go Here</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>Call Hello World REST API </button>
            </div>
        </div>
    )
}

export default WelcomeComponent