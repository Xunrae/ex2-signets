import MoreVertIcon from '@material-ui/icons/MoreVert';
import SortIcon from '@material-ui/icons/Sort';
import '../sass/Dossier.scss';

export default function Dossier({id, titre, couleur, dateMod}) {
  return (
    <article className={'Dossier'} style={{backgroundColor: couleur}}>
      <div className="couverture">
        <span className="deplacer"><SortIcon style={{fontSize: 40}} /></span>
        <img src={`images-dossiers/${id}.png`} alt={titre}/>
      </div>
      <div className="info">
        <h2>{titre}</h2>
        <p>{'Modifié : '+dateMod}</p>
      </div>
      <button><MoreVertIcon style={{fontSize: 40}} /></button>
    </article>
  );
}