import './styles.css';

type Props = {
   avatar_url: string;
   url: string;
   followers: number;
   location: string;
   name: string;
};

const ResultCard = ({ avatar_url, url, followers, location, name }: Props) => {
   return (
      <div className="result-card">
         <div className="result-img">
            <img src={avatar_url} alt="avatar-img" />
         </div>
         <div className="result-infos">
            <h1>Informações</h1>
            <div className="row-info">
               <h2>Perfil:</h2>
               <a href={url}>{url}</a>
            </div>
            <div className="row-info">
               <h2>Seguidores:</h2>
               <p>{followers}</p>
            </div>
            <div className="row-info">
               <h2>Localidade:</h2>
               <p>{location}</p>
            </div>
            <div className="row-info">
               <h2>Nome:</h2>
               <p>{name}</p>
            </div>
         </div>
      </div>
   );
};

export default ResultCard;
