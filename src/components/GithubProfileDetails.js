const GithubProfileDetails = (props) => {
    return(
        <>
        <div className="card">
            <div className="card-header">
                <span className="badge bg-success mx-1">Followers:{props.profile?.followers}</span>
                <span className="badge bg-primary mx-1">Repos:{props.profile?.public_repos}</span>
                <span className="badge bg-warning mx-1">Gists:{props.profile?.public_gists}</span>
                <span className="badge bg-danger mx-1">Following:{props.profile?.following}</span>

            </div>
            <div className="card-body">
                <ul className="list-group">
                    <li className="list-group-item">
                        Name : {props.profile?.name}

                    </li>
                    <li className="list-group-item">
                        Location : {props.profile?.location}

                    </li>
                    <li className="list-group-item">
                        Email : {props.profile?.email}

                    </li>
                    <li className="list-group-item">
                        Company : <a href={props.profile?.company} target="_blank" rel="noreferrer" >{props.profile?.company}</a>

                    </li>

                    <li className="list-group-item">
                        Blog : <a href={props.profile?.blog} target="_blank" rel="noreferrer" >{props.profile?.blog}</a>

                    </li>
                    <li className="list-group-item">
                        Member Since : {props.profile.created_at}
                    </li>
                    <li className="list-group-item">
                        Profile Url : <a href={props.profile?.html_url} target="_blank" rel="noreferrer" >{props.profile?.html_url}</a>

                    </li>


                </ul>

            </div>

        </div>
         </>
       

    )
}

export default GithubProfileDetails