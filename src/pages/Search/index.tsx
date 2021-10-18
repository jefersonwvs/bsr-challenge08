import { useState } from 'react';
import './styles.css';
import axios from 'axios';
import ResultCard from '../../components/ResultCard';

type FormData = {
   username: string;
};

type GithubUserData = {
   avatar_url: string;
   url: string;
   followers: number;
   location: string;
   name: string;
};

const Search = () => {
   const [formData, setFormData] = useState<FormData>({ username: '' });
   const [user, setUser] = useState<GithubUserData>();

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const name = event.target.name;
      const value = event.target.value;
      setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      axios
         .get(`https://api.github.com/users/${formData.username}`)
         .then((response) => {
            setUser(response.data as GithubUserData);
         })
         .catch((error) => {
            setUser(undefined);
         });
   };

   return (
      <div className="search-container">
         <div className="search-card">
            <h1>Encontre um perfil Github</h1>
            <form onSubmit={handleSubmit} className="search-form">
               <input
                  className="username-input"
                  type="text"
                  name="username"
                  placeholder="Usuário Github"
                  value={formData.username}
                  onChange={handleChange}
               />
               <button type="submit" className="btn btn-primary">
                  <p>Encontrar</p>
               </button>
            </form>
         </div>
         {user && (
            <ResultCard
               avatar_url={user.avatar_url}
               url={user.url}
               followers={user.followers}
               location={user.location}
               name={user.name}
            />
         )}
      </div>
   );
};

export default Search;
