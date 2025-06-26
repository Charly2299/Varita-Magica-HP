import varita from "../Assets/varita.png";

function Buttonwand({ onChanges }) {


  return (
    <button type="button" className="phrase-button heartbeat" 
    onClick={onChanges}>
      <img className="phrase-image" 
      src={varita} 
      alt="Ver Frase" />
       
    </button>
  );
}

export default Buttonwand;
