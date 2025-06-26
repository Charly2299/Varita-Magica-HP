import Buttonwand from "./Button_wand"





 function Card({phrase,onChange}){

return (

 <div className='phrase-container'>

    <div className='phrase-card'>
      <h2 className='phrase-phrase text-focus-in'>{phrase.phrase}</h2>
      <p className='phrase-autor text-focus-in'>{phrase.author}</p>
    </div>
 <Buttonwand onChanges={onChange}/>
<p className="phrase-lumos-text blink-1">REVELIO!!</p>

  </div>
)
  }

  export default Card