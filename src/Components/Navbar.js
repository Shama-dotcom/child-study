import './Navbar.css';
import nav from '../Images/nav.jpeg';

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-head">
        <img src={nav} alt="" className="nav-img" />

        <h1 className="nav-title">Let's Go</h1>
      </div>
      
    </div>
  );
};

export default Navbar;
