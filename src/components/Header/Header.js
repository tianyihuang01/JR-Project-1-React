const NavItem = () => (
    <ul className="navbar-nav ml-auto align-items-center">
        <li className="nav-item">
        <a className="nav-link" href="home">Home</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="resume">Resume</a>
        </li>          
        <li className="nav-item">
        <a className="nav-link" href="services">Services</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="blog">Blog</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="contact">Contact</a>
        </li>
    </ul>
);

const Header = () => (
    <nav className="navbar fixed-top navbar-expand-sm bg-light navbar-light" id="mainNav">
    <div className="container">
        <a className="navbar-brand" href="#">Tianyi <span className="theme--color">Huang</span></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" 
        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse align-items-center" id="navbarResponsive">
        <NavItem/>
        </div>
    </div>
    </nav>
)

export default Header;