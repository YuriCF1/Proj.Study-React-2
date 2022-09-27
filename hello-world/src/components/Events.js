const Events = () => {
  const handleMyEvent = (event) => {
    // console.log(event);
    console.log("Cliquei");
  };

  const renderSomething = (x) => {
    if(x){
        return <p>Renderizando o X</p>
    } else {
        return <p>Renderizando o Y</p>
    }

  }

  //Se eu colocar parenteses nessa função do onClick, ela será disparada quando o navegador ler o código
  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui</button>
      </div>
      <div>
        <button onClick={() => console.log("Clicado de novo")}>
          Clique aqui também
        </button>
      </div>
      <div>
        {/* Essa logina complexa não deve existir no html */}
        <button onClick={() => {
            if (true) {
                console.log("This shouldn't supost to be here");
            }
        }}>Mal exemplo de lógica</button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
