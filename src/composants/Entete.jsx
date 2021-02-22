import '../sass/Entete.scss';
import avatar from '../images/avatar.jpg';
import Avatar from '@material-ui/core/Avatar';

export default function Entete() {
  return (
    <header className="Entete">
      <div className="logo">Signets (Beta)</div>

      <div className="avatar">
        <p>Antoine Côté-L'Écuyer</p>
        <Avatar alt="Antoine Côté-L'Écuyer" src={avatar} />
      </div>
      
    </header>
  );
}