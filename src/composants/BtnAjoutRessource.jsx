import '../sass/BtnAjoutRessource.scss';
import FAB from '@material-ui/core/FAB';

export default function BtnAjoutRessource() {
  return (
    <button className="BtnAjoutRessource">
      <FAB style={{fontSize: 60,color:'#555'}}><p>+</p></FAB>
    </button>
  );
}