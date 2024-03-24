import './index.css';
import Header from "./components/Header";
import { restaurants } from './utils/constant';
import RestList from './components/Body/RestList';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header />
      <RestList restaurants={restaurants} />
      <Footer />
    </div>
  );
}

export default App;
