import logo from './../images/logo.svg'

function Header() {
    return (
        <header className="app-header">
            <img src={logo} alt='React Quiz App' style={{ width: '100px', height: '100px' }} />
            <h1>The React Quiz</h1>
        </header>
    );
}

export default Header;