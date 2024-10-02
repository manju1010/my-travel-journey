import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons';
function Navbar() {
    return (
        <div>
        <nav className="navbar" >
          <div className="globe">
        <FontAwesomeIcon icon={faEarthAsia} className="Earth" />
        </div>
        <h3> my travel journey</h3>
      </nav>
      </div>
    )
}
export default Navbar;
