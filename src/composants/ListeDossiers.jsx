import '../sass/ListeDossiers.scss';
import dossTab from '../data/liste-dossiers.json';
import Dossier from './Dossier';

export default function ListeDossiers() {
  return (
    <ul className="ListeDossiers">
      {
        dossTab.map( 
          dossier =>  <li>
                          <Dossier 
                            id={dossier.id}
                            titre={dossier.titre}
                            couleur={dossier.couleur}
                            dateMod={dossier.dateModif}
                          />
                      </li>
        )
      }
    </ul>
  );
}