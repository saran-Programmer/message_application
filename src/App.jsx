import NavBar from "./components/navbar/NavBar"
import ApplicationBody from "./components/body/ApplicationBody"
import "./App.css"

const App = () => {
  document.title = "Text Flow App"

  return(
      <div className="container">
        <NavBar />
        <ApplicationBody />
      </div>
  )
}

export default App