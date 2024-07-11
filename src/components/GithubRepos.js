const GithubRepos = (props) => {
    return(
      <>
      <div className="row">
        <div className="col">
            <p className="h4 text-primary">Your Repositories</p>

        </div>

      </div>
      {
        Object.keys(props).length >0 ? 
        <>
        <div className="row">
            <div className="col">
                <div className="card mt-3">
                    <div className="card-header">
                        <p className="h4">Your Repositories</p>


                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            {
                                props.repos.map((repo)=>{
                                    return (
                                        <li className="list-group-item d-flex justify-content-around">
                                            <p className="h5">
                                                <a href={repo.html} target="_blank" rel="noreferrer" >{repo.name}</a>
                                            </p>
                                            <span className="badge bg-success">{repo.stargazers_count} Stars</span>
                                            <span className="badge bg-primary">{repo.watchers_count} Watches</span>

                                        </li>
                                    )

                                    

                                })
                            }

                        </ul>

                    </div>

                </div>

            </div>

        </div>
        </>:null
      }
      
      </>

    )
}

export default GithubRepos