import '../sass/Entete.scss';
import avatar from '../images/avatar.jpg';

export default function Entete() {
  return (
    <header className="Entete">
      <div className="logo">Signets (Beta)</div>
      <div className="avatar"><p>Antoine Côté-L'Écuyer</p><img src={avatar} alt="Antoine Côté-L'Écuyer" /></div>
    </header>
  );
}