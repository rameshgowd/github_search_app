
import GithubSearchApp from "./components/GithubSearchApp"
const App = () => {
  return(
    <div className="app">
      <nav className="navbar  navbar-dark bg-dark navbar-expand-sm">
        <a href="/" className="navbar-brand mx-3"> Github Profile Search App</a>
      </nav>
      <GithubSearchApp/>

    </div>
    

  )
} 
export default App