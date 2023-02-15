import './App.css'
import 'normalize.css'
import Title from "./components/Title/Title";
import AlpacaProvider from './context/AlpacaProvider';
import Alpaca from './components/Alpaca/Alpaca';


function App() {



  return (
    <div className="App">
      <AlpacaProvider>
        <Title content={"Créez votre avatar :) !"}/>
        <Alpaca/>
      </AlpacaProvider>
    </div>
  )
}

export default App
