import './App.scss';

import NavigationBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
      </header>
      <section className="Content-Container">
        <div className="section_title">
          <h2> Productos destacados</h2>
        </div>
        <ItemListContainer />
      </section>
    </div>
  );
}

export default App;
