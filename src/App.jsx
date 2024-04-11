import NavBar from "./components/navbar/NavBar"
import ApplicationBody from "./components/body/ApplicationBody"

const App = () => {
  document.title = "Text Flow App"

  return(
      <div>
        <NavBar />
        <ApplicationBody />
      </div>
  )
}

export default App