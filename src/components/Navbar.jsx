
import '../index.css'
export default function Navbar({darkMode, toggleMode}) {
    return (
        <nav className={darkMode? "dark": ""}>
            <img src="/react-icon-small.png" className="nav--logo_icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div 
                  className="toggler--slider" 
                  onClick={toggleMode}
                >
                  <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}