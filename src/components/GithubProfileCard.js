const GithubProfileCard = (props) => {
    return(
       <>
       <div className="card">
        <img src={props.profile.avatar_url} alt="" className="image_fluid" />

        <div className="card-body">
            <p className="h4 text-primary">{props.profile.name}</p>
            <p>{props.profile.bio}</p>
            <a href ={props.profile.html_url} className="btn btn-success btn-sm" target="_blank" rel="noreferrer">Profile</a>

        </div>

       </div>
       </>

    )
}

export default GithubProfileCard