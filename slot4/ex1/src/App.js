
import './App.css';
import Hello from './components/Hello';
import ListPerson from './components/ListPerson';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import PizzaList from './components/pizza';
function App() {
  return (
    <div>
      <Hello />
      <ListPerson />
      <Footer
        id="DE190541"
        name="Chu Cao Huy"
        email="hyycichu@gmail.com"
        github="https://github.com/hyycichu-cell"
      />
      <PizzaList />
    </div>
  );
}

export default App;
