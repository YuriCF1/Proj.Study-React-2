const Events = () => {
  const handleMyEvent = (event) => {
    // console.log(event);
    console.log("Cliquei");
  };

  //Se eu colocar parenteses nessa função do onClick, ela será disparada quando o navegador ler o código
  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui</button>
      </div>
      <button onClick={()=>console.log('Clicado de novo')}>Clique aqui também</button>
    </div>
  );
};

export default Events;
