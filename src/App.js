import './App.css';
import Pestanas from './Components/Pestanas';

const App = () => {
  const tabs = [
    {name: 'Tab 1', text: 'Tab 1 content is showing here.'},
    {name: 'Tab 2', text: 'Tab 2 content is showing here.'}, 
    {name: 'Tab 3', text: 'Tab 3 content is showing here.'}
  ]
  return (
    <div className="App">
        <Pestanas tabs={tabs}/>
    </div>
  );
}

export default App;
