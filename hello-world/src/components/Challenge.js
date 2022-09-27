const Challenge = () => {
  let a = 1;
  let b = 2;
  return (
    <div>
      <p>{a}</p>
      <p>{b}</p>
      <button onClick={() => console.log(a + b)}>
        Somando
      </button>
    </div>
  );
};

export default Challenge;

//Atalho 'rfce'
