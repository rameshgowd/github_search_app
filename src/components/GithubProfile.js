import GithubProfileCard from "./GithubProfileCard"
import GithubProfileDetails from "./GithubProfileDetails"

const GithubProfile = (props) => {
    return(
       <>
      
        <div className="row mt-2">
            <div className="col">
                <p className="h4 text-primary">Your Profile</p>

            </div>

        </div>
        {
            Object.keys(props).length>0 ?
            <>
            <div className="row">
            <div className="col-md-3">
               <GithubProfileCard profile={props.profile} />

            </div>

        
        
            <div className="col-md-9">
                <GithubProfileDetails profile={props.profile}/>

            </div>
            </div>
          
            </>:null
        }
        

   

      
       </>

    )
}

export default GithubProfile