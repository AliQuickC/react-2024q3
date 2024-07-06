import './App.sass';
import Cards from './components/Cards/Cards';
import Search from './components/Search/Search';

function App(): JSX.Element {
  return (
    <main className="main">
      <div className="container">
        <Search />
        <Cards />
      </div>
    </main>
  );
}

export default App;
