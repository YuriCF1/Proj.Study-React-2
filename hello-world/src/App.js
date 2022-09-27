//Components
import TemplateExpressions from './components/TemplateExpressions';
import FirstComponent from './components/FirstComponent' //Arquivos js não precisao da extensão '.js'
import Events from './components/Events';

//Styles
import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  //Se eu usasr 'class' do css, ele só vai dar um erro no console, já que ele ainda consegue rodar assim
  return (
    <div className="App">
      <h1 className="teste">Hello, world!</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
    </div>  
  );
}

export default App;