import './App.css';
import Limits from './Components/Limits'
import Header from './Components/Header'
import TransactionList from './Components/TransactionList';
import AddTransaction from './Components/AddTransaction';
import { GlobalProvider } from './context/GlobalState'
import SearchTransaction from './Components/SearchTransaction';


function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <Limits />
        <SearchTransaction />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
