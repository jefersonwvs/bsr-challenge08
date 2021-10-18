import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
   return (
      <div className="home-container">
         <h1>Desafio Github API</h1>
         <h2>Bootcamp Spring React - DevSuperior</h2>
         <Link to="/search">
            <button className="btn btn-primary btn-lg btn-start">
               <p>Começar</p>
            </button>
         </Link>
      </div>
   );
};

export default Home;
