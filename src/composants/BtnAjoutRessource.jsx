import '../sass/BtnAjoutRessource.scss';
import AddCircleIcon from '@material-ui/icons/AddCircle';

export default function BtnAjoutRessource() {
  return (
    <button className="BtnAjoutRessource">
      <AddCircleIcon style={{fontSize: 60,color:'#555'}} />
    </button>
  );
}