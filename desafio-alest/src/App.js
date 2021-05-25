import './App.css';
import Card from './componentes/Card'
import Header from './componentes/Header'
import SearchBar from './componentes/Search-Bar';
import Firebase from './firabase'
function App() {
  return (
    <div class="container p-4 col-12">
      <Header />
      <SearchBar />
      <div class="container row">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

    </div>
  );
}

export default App;
