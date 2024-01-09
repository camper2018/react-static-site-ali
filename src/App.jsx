import {useState} from 'react';
import Navbar from "./components/Navbar.jsx"
import Main from "./components/Main.jsx"

function App() {
    const [darkMode, setDarkMode] = useState(true);
    const toggleMode = ()=> {
        setDarkMode(prevMode=> !prevMode);
    }
    return (
        <div className="container">
            <Navbar darkMode={darkMode} toggleMode={toggleMode}/>
            <Main darkMode={darkMode}/>
        </div>
    )
}

export default App
