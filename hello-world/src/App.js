//Components
import TemplateExpressions from './components/TemplateExpressions';
import FirstComponent from './components/FirstComponent' //Arquivos js não precisao da extensão '.js'

//Styles
import './App.css';

function App() {
  //Se eu usasr 'class' do css, ele só vai dar um erro no console, já que ele ainda consegue rodar assim
  return (
    <div className="App">
      <h1 className="teste">Hello, world!</h1>
      <FirstComponent />
      <TemplateExpressions />
      <FirstComponent />
    </div>  
  );
}

export default App;