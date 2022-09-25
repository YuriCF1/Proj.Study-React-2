const TemplateExpressions = () => {
  const name = "Yuri";

  const data = {
    age: 24,
    job: "Programmer",
  };

  return (
    <div>
      <h3>
        Olá {name}, tudo bem? Com {data.age} anos, você trabalhará como{" "}
        {data.job}
      </h3>
      <h4>{"20" + "23"}</h4>
      <p>{console.log("JSX is amazing")}</p>
    </div>
  );
};

export default TemplateExpressions;
