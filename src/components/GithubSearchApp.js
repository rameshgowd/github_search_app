
import { useState } from "react"
import Axios from'axios'
import { clientID, clientSecret } from "./GithubCredintials";
import GithubProfile from "./GithubProfile";
import GithubRepos from "./GithubRepos";
const GithubSearchApp = () => {

    const [username, setUserName] = useState("");
    const [profile, setProfile] = useState({});
    const [repos, setRepos] = useState([])

    let searchUser = (event) =>{
        event.preventDefault();
        searchProfile(username);
        searchRepos(username);
    }

    let searchProfile = (username) => {
        let dataUrl = `http://api.github.com/users/${username}?clientId=${clientID}&clientSecret=${clientSecret}`
        
        Axios.get(dataUrl).then((response)=>{
           setProfile(response.data)
        }).catch((error)=>{
            console.log(error)
      
        })
    } 

    let searchRepos = (username) => { 
        let dataUrl = `http://api.github.com/users/${username}/repos?clientId=${clientID}&clientSecret=${clientSecret}`
        
        Axios.get(dataUrl).then((response)=>{ setRepos(response.data)})
        .catch((err)=>{console.log(err)})

    }

    return (
        <>
        <div className="container mt-4">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header bg-success text-white">
                            <p className="h4">Github Profile Search</p>

                        </div>
                        <div className="card-body">
                            <form className="d-flex" onSubmit={searchUser}>
                                <div className="form-group ">
                                    <input size="40" type="search" className="form-control " placeholder="Username" onChange={(e)=>setUserName(e.target.value)}/>

                                </div>
                                <div className="form-group ">
                                   
                                    <input   type="submit" value="Search" className="btn btn-primary mx-2 " />

                                </div>
                            </form>

                        </div>

                    </div>

                </div>

            </div>
            <div className="row mt-3">
                <div className="col">
                    {
                        Object.keys(profile).length>0 ?
                        <>
                        <GithubProfile profile={profile}/>
                        </>:null
                    }

                </div>
                <div className="row mt-3">
                <div className="col">
                    {
                        Object.keys(repos).length > 0 ? 
                        <>
                        <GithubRepos repos ={repos}/>
                        </>:null
                    }

                </div>    

            </div>

        </div>
        </div>
        
        </>
    )
} 

export default GithubSearchApp