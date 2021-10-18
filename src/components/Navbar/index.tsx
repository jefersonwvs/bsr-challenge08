import './styles.css';

import { Link } from 'react-router-dom';

const Navbar = () => {
   return (
      <div className="navbar-container">
         <Link to="/">
            <h1>Github API</h1>
         </Link>
      </div>
   );
};

export default Navbar;
